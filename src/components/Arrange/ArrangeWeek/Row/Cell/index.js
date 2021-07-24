import React, {useState} from 'react';
import Modal from '../../../../Modal';
import NumberModal from './NumberModal';
import cutNumber from '../../../../../functions/cutNumber';
import './cell.css';
import '../../../../Modal/modal.css';

const touchMax = {
    max: {
        pos: 12, neg: -12
    },
    limit: {
        pos: 10, neg: -10
    }
}

const touch = {
    initial: {
        X: 0, Y: 0
    },
    move: {
        X: 0, Y: 0
    },
    final: {
        X: 0, Y: 0
    }
}

export default function Cell(props) {

    const [editingNumber, switchEditingNumber] = useState(false);
    const avgTodo = props.avgTodo > 0 ? cutNumber(props.avgTodo) : '';

    function openModal(event) {
        if (event.target.classList.contains('main-cell') || event.target.classList.contains('type-cell')) switchEditingNumber(true);
    }

    function updateTodo(value) {
        props.onSaveTodo(props.id, props.index, value);
    }

    function startTouch(e) {
        touch.initial.X = e.touches[0].clientX;
        touch.initial.Y = e.touches[0].clientY;
    }

    function moveTouch(e) {
        if (touch.initial.X === 0 && touch.initial.Y === 0) return;
        touch.move.X = e.touches[0].clientX;
        touch.final.X = touch.initial.X - touch.move.X;
        touch.move.Y = e.touches[0].clientY;
        touch.final.Y = touch.initial.Y - touch.move.Y;
    }

    function endTouch() {
        if (touch.final.X > touchMax.max.pos && checkVerticalLimit()) {
            updateTodo(-1);
        } else if (touch.final.X < touchMax.max.neg && checkVerticalLimit()) {
            updateTodo(1);
        }
        for (const t in touch) {
            for (let v in touch[t]) {
                touch[t][v] = 0;
            }
        }
    }

    function checkVerticalLimit() {
        return touch.final.Y < touchMax.limit.pos && touch.final.Y > touchMax.limit.neg;
    }

    return (
        <td
            data-id={props.id}
            data-item={props.rowIndex}
            data-day={props.index}
            className={'main-cell week-spots' + (props.isThisWeek && props.today === props.index ? props.color : '')}
            onClick={props.type ? props.onChangeDay : props.isThisWeek ? openModal : props.onChangeDay}
            onTouchStart={props.type && props.isThisWeek ? startTouch : null}
            onTouchMove={props.type && props.isThisWeek ? moveTouch : null}
            onTouchEnd={props.type && props.isThisWeek ? endTouch : null}
        >
            <div
                className={props.type ?
                    ('spot' + (props.day === 1 ? ' closed' : props.day === 0 ? ' open' : ''))
                    :
                    ('type-cell' + (props.day === 0 ? ' grey' : ''))}
            >
                {!props.type && props.day > 0 ? props.day : !props.type && props.day > -1 ? avgTodo : ''}
            </div>
            {editingNumber &&
                <Modal
                    name={'number'}
                    onSwitchEditing={switchEditingNumber}
                    modal={
                        <NumberModal
                            id={props.id}
                            day={props.day}
                            avgTodo={props.avgTodo}
                            text={props.text}
                            dayOfWeek={props.dayOfWeek}
                            weekBeginning={props.weekBeginning}
                            onUpdateTodo={updateTodo}
                            onSwitchEditing={switchEditingNumber}
                        />
                    }
                />
            }
        </td>
    )
}
