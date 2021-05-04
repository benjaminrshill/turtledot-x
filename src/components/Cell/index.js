import React, {useState} from 'react';
import NumberModal from './NumberModal';
import cutNumber from '../../functions/cutNumber';
import './cell.css';

export default function Cell(props) {

    const [editing, switchEditing] = useState(false);
    const avgTodo = props.avgTodo > 0 ? cutNumber(props.avgTodo) : '';

    function openModal(event) {
        if (event.target.classList.contains('main-cell') || event.target.classList.contains('type-cell')) switchEditing(true);
    }

    function updateTodo(value) {
        props.onSaveTodo(props.id, props.index, value);
        switchEditing(false);
    }

    return (
        <td
            data-id={props.id}
            data-item={props.rowIndex}
            data-day={props.index}
            onClick={props.type ? props.onChangeDay : props.isThisWeek ? openModal : props.onChangeDay}
            className={'main-cell week-spots' + (props.isThisWeek && props.today === props.index ? props.color : '')}>
                <div
                    className={props.type ?
                        ('spot' + (props.day === 1 ? ' closed' : props.day === 0 ? ' open' : ''))
                        :
                        ('type-cell' + (props.day === 0 ? ' grey' : ''))}>
                    {!props.type && props.day > 0 ? props.day : !props.type && props.day > -1 ? avgTodo : ''}
                </div>
            {editing &&
                <NumberModal
                    id={props.id}
                    day={props.day}
                    avgTodo={props.avgTodo}
                    text={props.text}
                    dayOfWeek={props.dayOfWeek}
                    weekBeginning={props.weekBeginning}
                    onUpdateTodo={updateTodo}
                    onSwitchEditing={switchEditing}
                />
            }
        </td>
    )
}
