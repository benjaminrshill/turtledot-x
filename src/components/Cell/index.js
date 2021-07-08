import React, {useState} from 'react';
import NumberModal from './NumberModal';
import cutNumber from '../../functions/cutNumber';
import './cell.css';

let posMax = 50;
let negMax = -50;
let initialX = 0;
let moveX = 0;
let finalX = 0;
let initialY = 0;
let moveY = 0;
let finalY = 0;

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

    function startTouch(e) {
        e.preventDefault();
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    }

    function moveTouch(e) {
        if (initialX === 0 && initialY === 0) return;
        moveX = e.touches[0].clientX;
        finalX = initialX - moveX;
        moveY = e.touches[0].clientY;
        finalY = initialY - moveY;
    }

    function endTouch() {
        if (finalX > posMax && finalY > posMax) {
            updateTodo(-1);
        } else if (finalX < negMax && finalY > posMax) {
            updateTodo(0);
        } else if (finalX < negMax && finalY < negMax) {
            updateTodo(-1);
        } else if (finalX > posMax && finalY < negMax) {
            updateTodo(1);
        }
        initialX = 0;
        moveX = 0;
        finalX = 0;
        initialY = 0;
        moveY = 0;
        finalY = 0;
    }

    return (
        <td
            data-id={props.id}
            data-item={props.rowIndex}
            data-day={props.index}
            onClick={props.type ? props.onChangeDay : props.isThisWeek ? openModal : props.onChangeDay}
            onTouchStart={startTouch}
            onTouchMove={moveTouch}
            onTouchEnd={endTouch}
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
