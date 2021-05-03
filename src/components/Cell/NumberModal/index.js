import React, {useState} from 'react';
import cutNumber from '../../../functions/cutNumber';
import {Check, Watch} from 'react-feather';
import './numberModal.css';
import './Timer/timer.css'

// class Timer {
//     interval = 1000;
//     expected;
//     timeout;
//
//     getStart() {
//         this.start(this.step, this.interval);
//     }
//
//     start(step, interval) {
//         this.expected = Date.now() + interval;
//         this.timeout = setTimeout(() => step(step, interval), interval);
//     }
//
//     stop() {
//         clearTimeout(this.timeout);
//     }
//
//     step(step, interval) {
//         let drift = Date.now() - this.expected;
//         if (drift > this.interval) {
//             console.warn('drift is too big');
//         }
//         this.doTime();
//         this.expected += this.interval;
//         this.timeout = setTimeout(this.step, Math.max(0, interval - drift));
//     }
//
//     doTime() {
//         console.log(this.expected);
//     }
// }

class Timer {
    interval = 1000;
    doZero(interval) {
        return interval < 10 ? '0'+interval : interval;
    };
    Date = Date.now() + this.interval;
    Hour = this.Date.getHours();
    Mins = this.doZero(this.Date.getMinutes());
    Secs = this.doZero(this.Date.getSeconds());
}

setInterval(() => {
    let timer = new Timer();
    document.querySelector('.hourMin').textContent = timer.Hour + ':' + timer.Mins;
    document.querySelector('.sec').textContent = timer.Secs;
}, 1000);

export default function NumberModal(props) {

    const [currentValue, editCurrentValue] = useState(props.day);
    const [inputNumber, editInputNumber] = useState(props.day > 0 ? props.day : cutNumber(props.avgTodo));
    const [timerOpen, switchTimerOpen] = useState(false);

    const timer = new Timer();

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
                    <div>
                        <button
                            onClick={() => switchTimerOpen(true)}
                            className='open-timer'
                        >
                            <Watch size={16} />
                        </button>
                    </div>
                </div>
                <div
                    onClick={() => switchTimerOpen(false)}
                    className={'timer-bg modal-bg' + (timerOpen ? ' open' : '')}
                >
                </div>
                <div className={'timer' + (timerOpen ? ' open' : '')}>
                    <div className='time'>
                    </div>
                    <div className='actions-panel'>
                        <button
                            onClick={timer.getStart}
                            className='timer-start'
                        >
                            start
                        </button>
                        <button
                            onClick={timer.stop}
                            className='timer-stop'
                        >
                            stop
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
