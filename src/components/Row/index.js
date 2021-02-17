import React, {useEffect, useState} from 'react';
import cutNumber from '../../functions/cutNumber';
import './row.css';

export default function Row(props) {

    const [todo, editTodo] = useState([...props.todo]);
    const [editing, switchEditing] = useState(false);
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
        const avgTodo = props.number / numberToDo.length;
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

    function saveTodo(event) {
        if (validateTodo(event.target.value)) {
            props.onSaveTodo(event);
            switchEditing(false);
        }
    }

    function validateTodo(day) {
        return day > -2 && day < 100001;
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
                <td
                    key={i + props.id + props.weekBeginning}
                    data-id={props.id}
                    data-item={props.index}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.type ? props.onChangeDay : props.isThisWeek ? () => switchEditing(true) : props.onChangeDay}
                    className={'main-cell week-spots' + (props.isThisWeek && row.today === i ? props.color : '')}>
                    {editing ?
                        <input
                            type='number'
                            data-id={props.id}
                            data-item={props.index}
                            data-day={i}
                            data-week={props.weekBeginning}
                            value={day > -1 ? day : ''}
                            className={'type-cell' + (day === 1 ? ' grey' : '')}
                            onChange={handleNumber}
                            onBlur={saveTodo}
                        />
                        :
                        <div
                            className={props.type ?
                                ('spot' + (day === 1 ? ' closed' : day === 0 ? ' open' : ''))
                                :
                                ('type-cell' + (day === 0 ? ' grey' : ''))}>
                            {!props.type && day > 0 ? day : !props.type && day > -1 ? row.avgTodo : ''}
                        </div>
                    }
                </td>
            )}
        </tr>
    );
}