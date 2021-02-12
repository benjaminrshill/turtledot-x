import React, {useEffect, useState} from 'react';
import cutNumber from '../../functions/cutNumber';

export default function Row(props: any) {

    const [editing, switchEdit] = useState(false);
    const [row, editRow] = useState({
        onesAndZeroes: '',
        currentNumber: '',
        tooHigh: false,
        tooLow: false,
        cutNum: '',
        goalNum: ''
    });

    useEffect(() => {
        doNumbers();
    }, [props]);

    function doNumbers() {
        const onesAndZeroes = props.todo.map((n: number) => n = (n >= 1 ? 1 : 0));
        const currentNumber = onesAndZeroes.reduce((a: number, b: number) => a + b, 0);
        const tooHigh = currentNumber > +props.number;
        const tooLow = currentNumber < +props.number;
        const cutNum = cutNumber(props.number);
        const goalNum = cutNumber(props.number / currentNumber);
        editRow({
            onesAndZeroes: onesAndZeroes,
            currentNumber: currentNumber,
            tooHigh: tooHigh,
            tooLow: tooLow,
            cutNum: cutNum,
            goalNum: goalNum
        });
    }

    return (
        <tr
            draggable={true}
            id={props.id + props.weekBeginning}
            data-index={props.index}
            data-dragid={props.id}
            data-dragweek={props.weekBeginning}
            className={props.color}
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
            {props.todo.map((day: number, i: number) =>
                <td
                    key={props.id + i}
                    id={props.id}
                    data-item={props.index}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={day < 100 ? props.onChangeDay : undefined}
                    className='main-cell week-spots'>
                    <div className={props.type ? 'spot grey' + (day === 100 ? ' closed' : day === 1 ? ' open' : '') : 'type-cell grey'}>
                        {!props.type && day > 0 ? row.goalNum : ''}
                    </div>
                </td>
            )}
        </tr>
    );
}
