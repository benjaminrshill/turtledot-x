import React, {useEffect, useState} from 'react';
import cutNumber from '../../functions/cutNumber';

export default function Row(props) {

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

    useEffect(() => doNumbers(), [props]);

    let countedNumber = 0;
    props.todo.forEach(day => day > 0 ? countedNumber++ : null);

    function doNumbers() {
        const onesAndZeroes = props.todo.map(n => n = (n >= 1 ? 1 : 0));
        const currentNumber = onesAndZeroes.reduce((a, b) => a + b, 0);
        const currentDone = props.todo.reduce((a, b) => a + b, 0);
        const allBoolDone = currentDone >= +props.number * 100;
        const allCountDone = currentDone !== 0 && currentDone % 100 === 0;
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

    return (
        <tr
            draggable={true}
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
                <button
                    value={props.id}
                    onClick={props.onRemoveItem}
                    className='week-item-delete'>
                    &mdash;
                </button>
                {props.text}
            </td>
            <td className={'main-cell week-item-number'
                + (props.type && (row.tooHigh ? ' week-number-arrow-down' : row.tooLow ? ' week-number-arrow-up' : ''))}>
                {row.cutNum}
            </td>
            {props.todo.map((day, i) =>
                <td
                    key={i + props.id + props.weekBeginning}
                    data-id={props.id}
                    data-item={props.index}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.onChangeDay}
                    className={'main-cell week-spots' + (props.isThisWeek && row.today === i ? props.color : '')}>
                    <div
                        className={props.type ?
                            ('spot' + (day === 100 ? ' closed' : day === 1 ? ' open' : ''))
                            :
                            ('type-cell' + (day === 1 ? ' grey' : ''))}>
                        {!props.type && day > 0 ? row.goalNum : ''}
                    </div>
                </td>
            )}
        </tr>
    );
}
