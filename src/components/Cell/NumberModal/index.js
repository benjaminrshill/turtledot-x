import React, {useState} from 'react';
import cutNumber from '../../../functions/cutNumber';
import {Check} from 'react-feather';
import './numberModal.css';

export default function NumberModal(props) {

    const [currentValue, editCurrentValue] = useState(props.day);
    const [inputNumber, editInputNumber] = useState(props.day > 0 ? props.day : cutNumber(props.avgTodo));

    function validateTodo() {
        if (currentValue > -2 && currentValue < 100001) {
            props.onUpdateTodo(currentValue);
        }
    }

    function checkKey(event) {
        if (event.key === 'Enter') validateTodo();
    }

    function doEstimate() {
        if (inputNumber > 0) {
            editCurrentValue(inputNumber);
        } else if (props.avgTodo > 0) {
            doChange(cutNumber(props.avgTodo));
        } else {
            doChange(1);
        }
    }

    function doChange(number) {
        editInputNumber(number);
        editCurrentValue(number);
    }

    return (
        <>
            <div
                onClick={validateTodo}
                className='number-modal-bg modal-bg'
            >
            </div>
            <div className='number-modal'>
                <div className='header'>
                    <h2>
                        {props.dayOfWeek}:
                    </h2>
                    <h3>
                        {props.text}
                    </h3>
                </div>
                <div className='options'>
                    <div
                        className={currentValue === -1 ? 'selected' : ''}
                        onClick={() => editCurrentValue(-1)}
                    >
                        not today
                    </div>
                    <div
                        className={currentValue === 0 ? 'selected' : ''}
                        onClick={() => editCurrentValue(0)}
                    >
                        schedule for today
                    </div>
                    <div
                        className={currentValue > 0 ? 'selected' : ''}
                        onClick={doEstimate}
                    >
                        number done today
                        <input
                            id={props.dayOfWeek + props.weekBeginning + props.id + 'inputNumber'}
                            type='number'
                            min='-1'
                            max='100000'
                            value={inputNumber}
                            onFocus={doEstimate}
                            onChange={event => doChange(+event.target.value)}
                            onKeyDown={event => checkKey(event)}
                        />
                    </div>
                </div>
                <div className='actions-panel'>
                    <div>
                    </div>
                    <div>
                        <button
                            onClick={validateTodo}
                            className='save-todo'
                        >
                            <Check size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
