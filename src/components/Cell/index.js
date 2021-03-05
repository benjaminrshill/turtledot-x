import React, {useState} from 'react';
import cutNumber from '../../functions/cutNumber';
import './cell.css';

export default function Cell(props) {

    const [editing, switchEditing] = useState(false);
    const [editedValue, changeEditedValue] = useState(props.day);

    function validateTodo() {
        if (editedValue > -2 && editedValue < 100001) {
            props.onSaveTodo(props.id, props.index, editedValue);
            switchEditing(false);
        }
    }

    function checkKey(event) {
        if (event.key === 'Enter') validateTodo();
    }

    function openModal(event) {
        if (event.target.classList.contains('main-cell') || event.target.classList.contains('type-cell')) switchEditing(true);
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
                    {!props.type && props.day > 0 ? props.day : !props.type && props.day > -1 ? cutNumber(props.avgTodo) : ''}
                </div>
            {editing &&
                <>
                    <div
                        onClick={validateTodo}
                        className='number-modal-bg'
                    >
                    </div>
                    <div className='number-modal'>
                        <h3>
                            {props.text}
                        </h3>
                        <h2>
                            {props.dayOfWeek}
                        </h2>
                        <fieldset>
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        name='numberValues'
                                        checked={+editedValue === -1}
                                        onChange={() => changeEditedValue(-1)}
                                    />
                                    not today
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        name='numberValues'
                                        checked={+editedValue === 0}
                                        onChange={() => changeEditedValue(0)}
                                    />
                                    schedule for today
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        name='numberValues'
                                        value={editedValue}
                                        checked={+editedValue > 0}
                                        onChange={() => changeEditedValue(editedValue > 0 ? null : 1)}
                                    />
                                    number done today:
                                </label>
                            </div>
                        </fieldset>
                        <input
                            type='number'
                            min='-1'
                            max='100000'
                            value={editedValue}
                            onChange={event => changeEditedValue(+event.target.value)}
                            onKeyDown={event => checkKey(event)}
                        />
                        <button
                            onClick={validateTodo}
                            className='save-todo'
                        >
                            save
                        </button>
                    </div>
                </>
            }
        </td>
    )
}
