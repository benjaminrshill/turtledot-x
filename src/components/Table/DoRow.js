import React from 'react';
import cutNumber from "../../functions/cutNumber";

export default function DoRow(props: any) {

    const currentNumber = props.todo.reduce((a: number, b: number) => a + b, 0);
    const allBoolDone = currentNumber >= +props.number * 100;
    const allCountDone = currentNumber !== 0 && currentNumber % 100 === 0;
    let countedNumber = 0;
    props.todo.forEach((day: number) => day > 0 ? countedNumber++ : null);
    const goalNum = cutNumber(props.number / countedNumber);
    const originalDay = new Date().getDay();
    const today = originalDay === 0 ? 6 : originalDay - 1;

    return (
        <tr
            id={props.id + props.weekBeginning}
            className={props.type ? (allBoolDone ? 'allDone' : props.color) : (allCountDone ? 'allDone' : props.color)}>
            <td
                id={props.id}
                className='week-item left-column'>
                {props.text}
            </td>
            <td className={'main-cell week-item-number'}>
                {cutNumber(props.number)}
            </td>
            {props.todo.map((day: number, i: number) =>
                <td
                    key={props.id + i}
                    id={props.id}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.onDoDay}
                    className={'main-cell week-spots' + (!props.archive && today === i ? props.color : '')}>
                    <div
                        className={props.type ?
                            ('spot' + (day === 100 ? ' closed' : day === 1 ? ' open' : ''))
                            :
                            ('type-cell' + (day === 1 ? ' grey' : ''))}>
                        {!props.type && day > 0 ? goalNum : ''}
                    </div>
                </td>
            )}
        </tr>
    );
}
