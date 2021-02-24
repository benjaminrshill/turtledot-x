import React, {useEffect, useState} from 'react';
import Cell from '../Cell';
import cutNumber from '../../functions/cutNumber';
import './row.css';

export default function Row(props) {

    const [todo, editTodo] = useState([...props.todo]);
    const [row, editRow] = useState({
        currentTotal: 0,
        avgTodo: 0,
        tooHigh: false,
        tooLow: false,
        allDone: false,
        cutNum: 0,
        goalNum: 0,
        originalDay: 0,
        today: 0
    });

    useEffect(() => editTodo([...props.todo]), [props]);
    useEffect(() => doNumbers(), [props]);

    function doNumbers() {
        let numberToDo = [];
        props.todo.forEach(day => day > -1 ? numberToDo.push(+day) : null);
        const currentTotal = numberToDo.reduce((a, b) => a + b, 0);
        const allDone = currentTotal >= +props.number;
        const avgTodo = (+props.number - currentTotal) / numberToDo.length;
        const tooHigh = numberToDo.length > +props.number;
        const tooLow = numberToDo.length < +props.number;
        const cutNum = cutNumber(+props.number);
        const goalNum = cutNumber(+props.number - currentTotal);
        const originalDay = new Date().getDay();
        const today = originalDay === 0 ? 6 : originalDay - 1;
        editRow({
            currentTotal: currentTotal,
            avgTodo: avgTodo,
            tooHigh: tooHigh,
            tooLow: tooLow,
            allDone: allDone,
            cutNum: cutNum,
            goalNum: goalNum,
            originalDay: originalDay,
            today: today
        });
    }

    function handleNumber(event) {
        let newTodo = [...todo];
        newTodo[event.target.dataset.day] = event.target.value;
        editTodo([...newTodo]);
    }

    return (
        <tr
            draggable={!props.archive}
            id={props.id + props.weekBeginning}
            data-index={props.index}
            data-dragid={props.id}
            data-dragweek={props.weekBeginning}
            className={row.allDone ? 'allDone' : props.color}
            // onDragStart={props.onDragStart}
            // onDragOver={props.onDragOver}
            // onDragLeave={props.onDragLeave}
            // onDrop={props.onDrop}
        >
            <td
                id={props.id}
                className='week-item left-column'>
                {!props.archive &&
                    <button
                        value={props.id}
                        onClick={props.onRemoveItem}
                        className='week-item-delete'>
                        &mdash;
                    </button>
                }
                {props.text}
            </td>
            <td className={'main-cell week-item-number'
                + (props.type && (row.tooHigh ? ' week-number-arrow-down' : row.tooLow ? ' week-number-arrow-up' : ''))}>
                {cutNumber(row.allDone ? row.currentTotal : row.goalNum > -1 ? row.goalNum : props.number)}
            </td>
            {todo.map((day, i) =>
                <Cell
                    key={props.number + props.id + i}
                    id={props.id}
                    day={day}
                    index={i}
                    rowIndex={props.index}
                    today={row.today}
                    avgTodo={row.avgTodo > 0 ? row.avgTodo : null}
                    type={props.type}
                    color={props.color}
                    weekBeginning={props.weekBeginning}
                    isThisWeek={props.isThisWeek}
                    onHandleNumber={handleNumber}
                    onSaveTodo={props.onSaveTodo}
                    onChangeDay={props.onChangeDay}
                />
            )}
        </tr>
    );
}
