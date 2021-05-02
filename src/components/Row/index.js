import React, {useEffect, useState} from 'react';
import Cell from '../Cell';
import cutNumber from '../../functions/cutNumber';
import './row.css';
import {ArrowUp, ArrowDown} from 'react-feather';

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
        let numberDoneAndToDo = [];
        let numberToDo = [];
        props.todo.forEach(day => {
            if (day > -1) numberDoneAndToDo.push(+day);
            if (day === 0) numberToDo.push(+day);
        });
        const currentTotal = numberDoneAndToDo.reduce((a, b) => a + b, 0);
        const allDone = currentTotal >= +props.number;
        const avgTodo = (+props.number - currentTotal) / numberToDo.length;
        const tooHigh = numberDoneAndToDo.length > +props.number;
        const tooLow = numberDoneAndToDo.length < +props.number;
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

    return (
        <tr
            draggable={!props.archive && props.shifting}
            id={props.id + props.weekBeginning}
            data-index={props.index}
            data-dragid={props.id}
            data-dragweek={props.weekBeginning}
            className={row.allDone ? 'allDone' : props.color}
        >
            <td
                id={props.id}
                className={'week-item left-column' + (props.deleting || props.shifting ? ' small' : '')}>
                {!props.archive && props.deleting &&
                    <button
                        value={props.id}
                        onClick={props.onRemoveItem}
                        className='week-item-actions'>
                        &mdash;
                    </button>
                }
                {!props.archive && props.shifting &&
                <div>
                    <button
                        value={props.index}
                        data-direction='up'
                        onClick={props.onMoveItem}
                        className='week-item-actions'>
                        <ArrowUp size={10} />
                    </button>
                    <button
                        value={props.index}
                        data-direction='down'
                        onClick={props.onMoveItem}
                        className='week-item-actions'>
                        <ArrowDown size={10} />
                    </button>
                </div>
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
                    avgTodo={row.avgTodo}
                    type={props.type}
                    color={props.color}
                    isThisWeek={props.isThisWeek}
                    weekBeginning={props.weekBeginning}
                    dayOfWeek={!props.archive && props.days[i]}
                    text={props.text}
                    onSaveTodo={props.onSaveTodo}
                    onChangeDay={props.onChangeDay}
                />
            )}
        </tr>
    );
}
