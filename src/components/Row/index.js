import React, {useEffect, useState} from 'react';
import cutNumber from '../../functions/cutNumber';
import './row.css';

export default function Index(props) {

    const [todo, editTodo] = useState([...props.todo]);
    const [editing, switchEditing] = useState(false);
    const [row, editRow] = useState({
        onesAndZeroes: '',
        currentNumber: '',
        currentDone: '',
        tooHigh: false,
        tooLow: false,
        allBoolDone: false,
        allCountDone: false,
        cutNum: '',
        goalNum: '',
        originalDay: '',
        today: 0
    });

    useEffect(() => editTodo([...props.todo]), [props]);
    useEffect(() => doNumbers(), [props]);

    function doNumbers() {
        let countedNumber = 0;
        props.todo.forEach(day => day > 0 ? countedNumber++ : null);
        const onesAndZeroes = props.todo.map(n => n = (n >= 1 ? 1 : 0));
        const currentNumber = onesAndZeroes.reduce((a, b) => a + b, 0);
        const currentDone = props.todo.reduce((a, b) => a + b, 0);
        const allBoolDone = currentDone >= +props.number * 100;
        const allCountDone = currentDone >= currentDone;
        const tooHigh = currentNumber > +props.number;
        const tooLow = currentNumber < +props.number;
        const cutNum = cutNumber(props.number);
        const goalNum = cutNumber(props.number / countedNumber);
        const originalDay = new Date().getDay();
        const today = originalDay === 0 ? 6 : originalDay - 1;
        editRow({
            onesAndZeroes: onesAndZeroes,
            currentNumber: currentNumber,
            currentDone: currentDone,
            tooHigh: tooHigh,
            tooLow: tooLow,
            allBoolDone: allBoolDone,
            allCountDone: allCountDone,
            cutNum: cutNum,
            goalNum: goalNum,
            originalDay: originalDay,
            today: today
        });
    }

    function handleNumber(event) {
        if (validateTodo(event.target.value)) {
            let newTodo = [...todo];
            newTodo[event.target.dataset.day] = event.target.value;
            editTodo([...newTodo]);
        }
    }

    function validateTodo(day) {
        return day < 100000;
    }

    return (
        <tr
            draggable={!props.archive}
            id={props.id + props.weekBeginning}
            data-index={props.index}
            data-dragid={props.id}
            data-dragweek={props.weekBeginning}
            className={props.type ? (row.allBoolDone ? 'allDone' : props.color) : (row.allCountDone ? 'allDone' : props.color)}
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
                {row.cutNum}
            </td>
            {todo.map((day, i) =>
                <td
                    key={i + props.id + props.weekBeginning}
                    data-id={props.id}
                    data-item={props.index}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.type ? props.onChangeDay : () => switchEditing(true)}
                    className={'main-cell week-spots' + (props.isThisWeek && row.today === i ? props.color : '')}>
                    {editing ?
                        <input
                            type='number'
                            data-id={props.id}
                            data-item={props.index}
                            data-day={i}
                            data-week={props.weekBeginning}
                            value={day > 0 ? day : ''}
                            className={'type-cell' + (day === 1 ? ' grey' : '')}
                            onChange={handleNumber}
                            onBlur={() => props.onSaveTodo(todo)}
                        />
                        :
                        <div
                            className={props.type ?
                                ('spot' + (day === 100 ? ' closed' : day === 1 ? ' open' : ''))
                                :
                                ('type-cell' + (day === 1 ? ' grey' : ''))}>
                            {!props.type && day > 0 ? (props.isThisWeek ? day : row.goalNum) : ''}
                        </div>
                    }
                </td>
            )}
        </tr>
    );
}
