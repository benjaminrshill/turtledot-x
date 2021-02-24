import React, {useState} from 'react';
import cutNumber from '../../functions/cutNumber';
import '../Row/row.css';

export default function Cell(props) {

    const [editing, switchEditing] = useState(false);

    function doEdit(event) {
        if (props.day === -1) {
            props.onChangeDay(event);
        } else {
            switchEditing(true);
        }
    }

    function checkKey(event) {
        if (event.key === 'Enter') saveTodo(event);
    }

    function saveTodo(event) {
        if (validateTodo(event.target.value)) {
            props.onSaveTodo(event);
            switchEditing(false);
        }
    }

    function validateTodo(day) {
        return (day > -2 && day < 100001) || day === '';
    }

    return (
        <td
            data-id={props.id}
            data-item={props.rowIndex}
            data-day={props.index}
            data-week={props.weekBeginning}
            onClick={props.type ? props.onChangeDay : props.isThisWeek ? doEdit : props.onChangeDay}
            className={'main-cell week-spots' + (props.isThisWeek && props.today === props.index ? props.color : '') + (editing ? ' editing' : '')}>
            {editing ?
                <input
                    type='number'
                    min='-1'
                    max='100000'
                    data-id={props.id}
                    data-item={props.rowIndex}
                    data-day={props.index}
                    data-week={props.weekBeginning}
                    value={props.day > -1 ? props.day : ''}
                    className={'type-cell' + (props.day === 0 ? ' grey' : '')}
                    onChange={props.onHandleNumber}
                    onBlur={saveTodo}
                    onKeyDown={checkKey}
                />
                :
                <div
                    className={props.type ?
                        ('spot' + (props.day === 1 ? ' closed' : props.day === 0 ? ' open' : ''))
                        :
                        ('type-cell' + (props.day === 0 ? ' grey' : ''))}>
                    {!props.type && props.day > 0 ? props.day : !props.type && props.day > -1 ? cutNumber(props.avgTodo) : ''}
                </div>
            }
        </td>
    )
}
