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
                key={'thisWeek'}
                weekName={'This Week'}
                days={days}
                items={items}
                weekBeginning={props.thisWeekBeginning}
                isThisWeek={true}
            />
            <ArrangeWeek
                key={'nextWeek'}
                weekName={'Next Week'}
                days={days}
                items={items}
                weekBeginning={props.nextWeekBeginning}
                thisWeekBeginning={props.thisWeekBeginning}
            />
        </main>
    );
}
