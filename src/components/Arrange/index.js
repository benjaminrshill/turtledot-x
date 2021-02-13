import React from 'react';
import ArrangeWeek from './ArrangeWeek';
import {days} from '../../static/colors';
import '../../weeks.css';
import './arrange.css';

export default function Arrange(props) {

    const items = JSON.parse(localStorage.getItem('items'));
    const thisWeekBeginning = getWeekBeginning();
    const nextWeekBeginning = getWeekBeginning(7);

    function getWeekBeginning(addWeek = 0) {
        let newDate = new Date(),
            day = newDate.getDay();
        function padZero(n){ return n < 10 ? '0' + n : n}
        if (day > 1) {
            newDate.setDate(newDate.getDate() - day + 1 + addWeek);
        } else if (day === 0) {
            newDate.setDate(newDate.getDate() - 6 + addWeek);
        } else {
            newDate.setDate(newDate.getDate() + addWeek);
        }
        return newDate.getFullYear() + '/' + padZero(newDate.getMonth() + 1) + '/' + padZero(newDate.getDate());
    }

    return (
        <main id='arrange'>
            <ArrangeWeek
                key={'thisWeek'}
                weekName={'This Week'}
                days={days}
                items={items}
                weekBeginning={thisWeekBeginning}
                isThisWeek={true}
            />
            <ArrangeWeek
                key={'nextWeek'}
                weekName={'Next Week'}
                days={days}
                items={items}
                weekBeginning={nextWeekBeginning}
                thisWeekBeginning={thisWeekBeginning}
            />
        </main>
    );
}
