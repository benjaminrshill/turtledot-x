import React from 'react';
import ArrangeWeek from './ArrangeWeek';
import {days} from '../../static/colors';
import '../../weeks.css';
import './arrange.css';

export default function Arrange(props) {

    const items = JSON.parse(localStorage.getItem('items'));

    return (
        <main id='arrange'>
            <h1>
                Arrange
            </h1>
            <ArrangeWeek
                key={'nextWeek'}
                weekName={'Next Week'}
                days={days}
                items={items}
                weekBeginning={props.nextWeekBeginning}
                // onAddAllItemsToWeek={props.onAddAllItemsToWeek}
                // onCopyAllFromThisWeek={props.onCopyAllFromThisWeek}
                // onMoveItemInWeek={props.onMoveItemInWeek}
                // onRemoveItemFromWeek={props.onRemoveItemFromWeek}
            />
            <ArrangeWeek
                key={'thisWeek'}
                weekName={'This Week'}
                days={days}
                items={items}
                weekBeginning={props.thisWeekBeginning}
                // onAddAllItemsToWeek={props.onAddAllItemsToWeek}
                // onMoveItemInWeek={props.onMoveItemInWeek}
                // onRemoveItemFromWeek={props.onRemoveItemFromWeek}
            />
        </main>
    );
}
