import React, {useEffect, useState} from 'react';
import Row from '../../Row';
import '../arrange.css';
import {days} from "../../../static/colors";

export default function ArrangeWeek(props) {

    const [week, editWeek] = useState(JSON.parse(localStorage.getItem(props.weekBeginning)));
    const [unselected, editUnselected] = useState(JSON.parse(localStorage.getItem('items')));
    const [selected, editSelected] = useState([]);

    useEffect(() => createWeek(), [week]);

    async function createWeek() {
        let createSelected = [];
        let createUnselected = JSON.parse(localStorage.getItem('items'));
        let newWeek = await JSON.parse(localStorage.getItem(props.weekBeginning));
        if (newWeek) {
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

    function addItemToWeek(event) {
        let newWeek = {...week};
        console.log(newWeek)
        if (newWeek.items === undefined) newWeek = {date: props.weekBeginning, items: []};
        console.log(newWeek)
        newWeek.items.push([event.target.value, [-1, -1, -1, -1, -1, -1, -1]]);
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

    function addAllItemsToWeek() {
        let ids = [];
        let newWeek = {...week};
        unselected.forEach(item => ids.push(item.id));
        if (newWeek.items === undefined) newWeek = {date: props.weekBeginning, items: []};
        ids.forEach(id => newWeek.items.push([id, [-1, -1, -1, -1, -1, -1, -1]]));
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

    function removeItemFromWeek(event) {
        if (window.confirm('Really remove this item from schedule?')) {
            let newWeek = {...week};
            newWeek.items = newWeek.items.filter(needle => needle[0] !== event.target.value);
            localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
            editWeek({...newWeek});
        }
    }

    function changeDay(event) {
        let newWeek = {...week};
        let item = newWeek.items.find(item => item[0] === event.currentTarget.dataset.id);
        let day = event.currentTarget.dataset.day;
        if (props.isThisWeek) {
            item[1][day] = (item[1][day] === (-1) ? 0 : item[1][day] === 0 ? 1 : (-1));
        } else {
            item[1][day] = (item[1][day] > (-1) ? (-1) : 0);
        }
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
        if (props.isThisWeek) updateArchive();
    }

    function saveTodo(id, day, value) {
        let newWeek = {...week};
        let item = newWeek.items.find(item => item[0] === id);
        item[1][day] = value;
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
        if (props.isThisWeek) updateArchive();
    }

    function updateArchive() {
        let archive = JSON.parse(localStorage.getItem('archive'));
        let thisWeek = {
            date: props.weekBeginning,
            items: [...selected]
        };
        if (archive) {
            let index = archive.findIndex(week => week.date === thisWeek.date);
            if (index !== -1) {
                archive[index] = thisWeek;
            } else {
                archive.unshift(thisWeek);
            }
        } else {
            archive = [];
            archive.unshift(thisWeek);
        }
        localStorage.setItem('archive', JSON.stringify(archive));
    }

    return (
        <div className='week'>
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
                                onRemoveItem={removeItemFromWeek}
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
                        className='addAllItems'
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
