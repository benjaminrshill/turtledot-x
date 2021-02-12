import React, {useEffect, useState} from 'react';
import Row from '../../Table/Row';
import '../arrange.css';

let touchData = {};

export default function ArrangeWeek(props) {

    const [week, editWeek] = useState(JSON.parse(localStorage.getItem(props.weekBeginning)));
    const [unselected, editUnselected] = useState(props.items);
    const [selected, editSelected] = useState([]);

    useEffect(() => createWeek(), [week]);

    async function createWeek() {
        let createSelected = [];
        let createUnselected = [...props.items];
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
        if (!newWeek) newWeek = {date: props.weekBeginning, items: []};
        newWeek.items.push([event.target.value, [0,0,0,0,0,0,0]]);
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

    function addAllItemsToWeek() {
        let ids = [];
        let newWeek = {...week};
        unselected.forEach(item => ids.push(item.id));
        if (!newWeek) newWeek = {date: props.weekBeginning, items: []};
        ids.forEach(id => newWeek.items.push([id, [0,0,0,0,0,0,0]]));
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

    function removeItemFromWeek(event) {
        let newWeek = {...week};
        newWeek.items = newWeek.items.filter(needle => needle[0] !== event.target.value);
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

    function copyAllFromThisWeek () {
        if (localStorage.getItem(props.thisWeekBeginning)) {
            let newWeek = {...week};
            let thisWeek = JSON.parse(localStorage.getItem(props.thisWeekBeginning));
            if (!newWeek) newWeek = {date: props.weekBeginning, items: []};
            newWeek.items = [...thisWeek.items];
            localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
            editWeek({...newWeek});
        }
    }

    function changeDay(event, closed = 0) {
        let newWeek = {...week};
        let item = newWeek.items.find(item => item[0] === event.currentTarget.dataset.id);
        let day = event.currentTarget.dataset.day;
        if (closed > 0) {
            if (item[1][day] > 0) item[1][day] = (item[1][day] === 1 ? 100 : 1);
        } else {
            item[1][day] = (item[1][day] > 0 ? 0 : 1);
        }
        localStorage.setItem(props.weekBeginning, JSON.stringify(newWeek));
        editWeek({...newWeek});
    }

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
                                onRemoveItem={removeItemFromWeek}
                                onChangeDay={changeDay}
                                // onDragStart={onDragStart}
                                // onDragOver={onDragOver}
                                // onDragLeave={onDragLeave}
                                // onDrop={onDrop}
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
                            onClick={copyAllFromThisWeek}
                        >
                            copy schedule from this week
                        </button>
                    }
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
