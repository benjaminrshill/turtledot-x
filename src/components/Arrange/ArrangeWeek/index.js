import React, {useEffect, useState} from 'react';
import Row from './Row';
import ActionsPanel from './ActionsPanel';
import Modal from '../../Modal';
import DayModal from './DayModal';
import getStoredItems from '../../../functions/getStoredItems';
import getStoredWeek from '../../../functions/getStoredWeek';
import '../arrange.css';
import '../../Modal/modal.css';
import {days} from '../../../static/colorsDays';
import AddItems from './AddItems';

export default function ArrangeWeek(props) {

    const [week, editWeek] = useState(getStoredWeek(props.weekBeginning));
    const [unselected, editUnselected] = useState(getStoredItems());
    const [selected, editSelected] = useState([]);
    const [deleting, switchDeleting] = useState(false);
    const [shifting, switchShifting] = useState(false);
    const [addingItems, switchAddingItems] = useState(false);
    const [editingDay, switchEditingDay] = useState(false);

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

    function addAllItemsToWeek() {
        let ids = [];
        let newWeek = {...week};
        unselected.forEach(item => ids.push(item.id));
        if (newWeek.items === undefined) newWeek = {date: props.weekBeginning, items: []};
        ids.forEach(id => newWeek.items.push([id, [-1, -1, -1, -1, -1, -1, -1]]));
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function addItemToWeek(event) {
        let newWeek = {...week};
        if (newWeek.items === undefined) newWeek = {date: props.weekBeginning, items: []};
        newWeek.items.push([event.target.value, [-1, -1, -1, -1, -1, -1, -1]]);
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function removeItemFromWeek(event) {
        let newWeek = {...week};
        newWeek.items = newWeek.items.filter(needle => needle[0] !== event.target.value);
        saveItem(newWeek);
        editWeek({...newWeek});
    }

    function moveItemInWeek(event) {
        let newWeek = JSON.parse(JSON.stringify(week));
        let index = +event.currentTarget.value;
        let newIndex;
        if (event.currentTarget.dataset.direction === 'up') {
            newIndex = index > 0 ? index - 1 : newWeek.items.length - 1;
        } else {
            newIndex = index < newWeek.items.length - 1 ? index + 1 : 0;
        }
        newWeek.items.splice(newIndex, 0, newWeek.items.splice(index, 1)[0]);
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
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
                    weekBeginning={props.weekBeginning}
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
                                className='day'
                                onClick={event => event.target.classList.contains('day') ? switchEditingDay(day + props.weekBeginning) : null}
                            >
                                {day.substring(0,1)}
                                {editingDay === (day + props.weekBeginning) &&
                                    <Modal
                                        name={'day'}
                                        onToggleModal={switchEditingDay}
                                        modal={
                                            <DayModal
                                                key={day + props.weekBeginning + 'dayView'}
                                                index={i}
                                                day={day}
                                                today={props.today}
                                                isThisWeek={props.isThisWeek}
                                                weekBeginning={props.weekBeginning}
                                                selected={selected}
                                                onToggleModal={switchEditingDay}
                                            />
                                        }
                                    />
                                }
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
                                today={props.today}
                                isThisWeek={props.isThisWeek}
                                weekBeginning={props.weekBeginning}
                                days={days}
                                deleting={deleting}
                                shifting={shifting}
                                onRemoveItem={removeItemFromWeek}
                                onMoveItem={moveItemInWeek}
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
                        className='add-items'
                        onClick={() => switchAddingItems(true)}
                    >
                        add items
                    </button>
                    { addingItems &&
                        <Modal
                            name={'add-items'}
                            onToggleModal={switchAddingItems}
                            modal={
                                <AddItems
                                    key={props.weekBeginning + 'addItems'}
                                    unselected={unselected}
                                    onAddAllItemsToWeek={addAllItemsToWeek}
                                    onAddItemToWeek={addItemToWeek}
                                    onToggleModal={switchAddingItems}
                                />
                            }
                        />
                    }
                </div>
            }
        </div>
    );
}
