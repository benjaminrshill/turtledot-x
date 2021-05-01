import React, {useEffect, useState} from 'react';
import Row from '../../Row';
import getStoredItems from '../../../functions/getStoredItems';
import getStoredWeek from '../../../functions/getStoredWeek';
import '../arrange.css';
import {days} from '../../../static/colorsDays';
import {Trash, Trash2, Maximize2, X} from 'react-feather';
import ActionsPanel from "./ActionsPanel";

export default function ArrangeWeek(props) {

    const [week, editWeek] = useState(getStoredWeek(props.weekBeginning));
    const [unselected, editUnselected] = useState(getStoredItems());
    const [selected, editSelected] = useState([]);
    const [deleting, switchDeleting] = useState(false);
    const [shifting, switchShifting] = useState(false);

    let touchData = {
        item: null,
        rect: null,
    };

    useEffect(() => createWeek(), [week]);

    async function createWeek() {
        let createSelected = [];
        let createUnselected = getStoredItems();
        let newWeek = await getStoredWeek(props.weekBeginning);
        if (newWeek.items) {
            newWeek.items.forEach(item => {
                let index = createUnselected.findIndex(uItem => uItem.id === item[0]);
                if (index > -1) {
                    let moveItem = createUnselected.splice(index, 1);
                    moveItem[0].todo = item[1];
                    createSelected.push(moveItem[0]);
                }
            });
        }
        editUnselected([...createUnselected]);
        editSelected([...createSelected]);
    }

    function saveItem(newWeek) {
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
    }

    function addItemToWeek(event) {
        let newWeek = {...week};
        if (newWeek.items === undefined) newWeek = {date: props.weekBeginning, items: []};
        newWeek.items.push([event.target.value, [-1, -1, -1, -1, -1, -1, -1]]);
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function addAllItemsToWeek() {
        let ids = [];
        let newWeek = {...week};
        unselected.forEach(item => ids.push(item.id));
        if (newWeek.items === undefined) newWeek = {date: props.weekBeginning, items: []};
        ids.forEach(id => newWeek.items.push([id, [-1, -1, -1, -1, -1, -1, -1]]));
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function removeItemFromWeek(event) {
        let newWeek = {...week};
        newWeek.items = newWeek.items.filter(needle => needle[0] !== event.target.value);
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function dragStart(event) {
        touchData.item = event.currentTarget;
    }

    function dragOver(event) {
        event.preventDefault();
        let movingOver = event.currentTarget;
        let movedParent = movingOver.parentNode;
        touchData.rect = movingOver.getBoundingClientRect();
        if (movedParent.dataset.dragweek === movingOver.dataset.dragweek) {
            if (movingOver === touchData.item) { // prevent dropping on self
                event.dataTransfer.dropEffect = 'none';
            } else {
                event.dataTransfer.dropEffect = 'move';
                if (event.clientY > touchData.rect.top - 1 || event.clientY < touchData.rect.bottom + 1) {
                    movingOver.classList.add('scooch');
                } else {
                    movingOver.classList.remove('scooch');
                }
            }
        }
    }

    function dragLeave(event) {
        if (event.clientY < touchData.rect.top + 1 || event.clientY > touchData.rect.bottom - 1) {
            event.currentTarget.classList.remove('scooch');
        }
    }

    function drop(event) {
        event.preventDefault();
        event.currentTarget.parentNode.childNodes.forEach(row => row.classList.remove('scooch'));
        let droppingOn = event.currentTarget;
        moveItemInWeek(+touchData.item.dataset.index, +droppingOn.dataset.index);
    }

    function moveItemInWeek(dragged, dropped) {
        let newWeek = JSON.parse(JSON.stringify(week));
        newWeek.items.splice(dropped, 0, newWeek.items.splice(dragged, 1)[0]);
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function changeDay(event) {
        let newWeek = {...week};
        let index = newWeek.items.findIndex(item => item[0] === event.currentTarget.dataset.id);
        let item = newWeek.items[index];
        let day = event.currentTarget.dataset.day;
        if (props.isThisWeek) {
            item[1][day] = (item[1][day] === (-1) ? 0 : item[1][day] === 0 ? 1 : (-1));
        } else {
            item[1][day] = (item[1][day] > (-1) ? (-1) : 0);
        }
        saveItem(newWeek);
        editWeek({...newWeek});
        updateArchive(newWeek, index);
    }

    function saveTodo(id, day, value) {
        let newWeek = {...week};
        let index = newWeek.items.findIndex(item => item[0] === id);
        let item = newWeek.items[index];
        item[1][day] = value;
        saveItem(newWeek);
        editWeek({...newWeek});
        updateArchive(newWeek, index);
    }

    function updateArchive(newWeek, i) {
        if (props.isThisWeek) {
            let archive = JSON.parse(localStorage.getItem('archive'));
            let thisWeek = {
                date: props.weekBeginning,
                items: [...selected]
            };
            thisWeek.items[i].todo = newWeek.items[i][1];
            if (archive) {
                let index = archive.findIndex(week => week.date === thisWeek.date);
                index > -1 ? archive[index] = thisWeek : archive.unshift(thisWeek);
            } else {
                archive = [];
                archive.unshift(thisWeek);
            }
            localStorage.setItem('archive', JSON.stringify(archive));
        }
    }

    return (
        <div className='week'>
            <div className='week-header'>
                <ActionsPanel
                    deleting={deleting}
                    onSwitchDeleting={switchDeleting}
                    shifting={shifting}
                    onSwitchShifting={switchShifting}
                />
                {props.weekName === 'This Week' ?
                    <h1>
                        {props.weekName}
                    </h1>
                    :
                    <h2>
                        {props.weekName}
                    </h2>
                }
            </div>
            <section>
                <table>
                    <thead>
                    <tr>
                        <td className='week-date left-column'>
                            {props.weekBeginning}
                        </td>
                        <td className='week-date'>
                        </td>
                        {props.days.map((day, i) =>
                            <td
                                key={day + i + props.weekBeginning}
                                className='day'>
                                {day.substring(0,1)}
                            </td>
                        )}
                    </tr>
                    </thead>
                    <tbody data-dragweek={props.weekBeginning}>
                        {selected.map((item, i) =>
                            <Row
                                key={item.id + props.weekBeginning}
                                id={item.id}
                                index={i}
                                text={item.text}
                                type={item.type}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                isThisWeek={props.isThisWeek}
                                weekBeginning={props.weekBeginning}
                                days={days}
                                deleting={deleting}
                                shifting={shifting}
                                onRemoveItem={removeItemFromWeek}
                                onDragStart={dragStart}
                                onDragOver={dragOver}
                                onDragLeave={dragLeave}
                                onDrop={drop}
                                onChangeDay={changeDay}
                                onSaveTodo={saveTodo}
                            />
                        )}
                    </tbody>
                </table>
            </section>
            {unselected.length > 0 &&
                <div className='edit-box'>
                    <button
                        className='add-all-items'
                        onClick={addAllItemsToWeek}
                    >
                        add all items
                    </button>
                    <div className='items-list'>
                        {unselected.map(item =>
                            <button
                                key={item.id + props.weekBeginning + 'u'}
                                value={item.id}
                                data-week={props.weekBeginning}
                                className={'items-list-item ' + item.color}
                                onClick={addItemToWeek}
                            >
                                {item.text}
                            </button>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}
