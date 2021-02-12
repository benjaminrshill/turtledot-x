import React, {useEffect, useState} from 'react';
import Row from '../../Table/Row';
import '../arrange.css';

let touchData = {};

export default function ArrangeWeek(props) {

    const [week, editWeek] = useState(JSON.parse(localStorage.getItem(props.weekBeginning)));
    const [unselected, editUnselected] = useState(props.items);
    const [selected, editSelected] = useState([]);

    useEffect(() => createWeek(), [week]);

    function createWeek() {
        let createSelected = [];
        let createUnselected = [...unselected];
        if (week) {
            week.items.forEach(week => {
                let index = createUnselected.findIndex(item => item.id === week.date);
                if (index > -1) {
                    let item = createUnselected.splice(index, 1);
                    item[0].todo = week.items;
                    createSelected.push(item[0]);
                }
            });
        }
        editUnselected([...createUnselected]);
        editSelected([...createSelected]);
    }

    function addItemToWeek(event) {
        let newWeek;
        if (week) {
            newWeek = {...week};
            newWeek.items.push([event.target.value, [0,0,0,0,0,0,0]]);
        } else {
            newWeek = {
                date: event.target.dataset.week,
                items: [[event.target.value, [0,0,0,0,0,0,0]]]
            }
        }
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

    // function changeDay(event: MouseEvent, closed = 0) {
    //     let week = [...selected],
    //         item = event.currentTarget.dataset.item,
    //         day = event.currentTarget.dataset.day;
    //     if (closed > 0) {
    //         if (week[item].todo[day] > 0) week[item].todo[day] = (week[item].todo[day] === 1 ? 100 : 1);
    //     } else {
    //         week[item].todo[day] = (week[item].todo[day] > 0 ? 0 : 1);
    //     }
    //     editSelected([...week]);
    //     props.onStoreDay(props.weekBeginning, event.currentTarget.id, week[item].todo);
    // }

    // function storeDay(weekBeginning: string, itemId: string, todo: Array<number>, closed = 0) {
    //     let newWeeks = [...weeks];
    //     let week = newWeeks.find(needle => needle.date === weekBeginning);
    //     let item = week.items.find(item => item[0] === itemId);
    //     item[1] = todo;
    //     localStorage.setItem('weeks', JSON.stringify(weeks));
    // }

    return (
        <div className='week'>
            <h2>
                {props.weekName}
            </h2>
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
                                {day}
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
                                weekBeginning={props.weekBeginning}
                                // onChangeDay={changeDay}
                                // onDragStart={onDragStart}
                                // onDragOver={onDragOver}
                                // onDragLeave={onDragLeave}
                                // onDrop={onDrop}
                                // onRemoveItem={removeItem}
                            />
                        )}
                    </tbody>
                </table>
            </section>
            {unselected.length > 0 &&
                <div className='edit-box'>
                    {selected.length < 1 && props.weekName === 'Next Week' &&
                        <button
                            className='addAllItems copy'
                            // onClick={copyAllItems}
                        >
                            copy schedule from this week
                        </button>
                    }
                    <button
                        className='addAllItems'
                        // onClick={addAllItems}
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
