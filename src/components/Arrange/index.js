import React, {useState, useEffect} from 'react';
import ArrangeWeek from './ArrangeWeek';
import {days} from '../../static/colorsDays';
import './arrange.css';

export default function Arrange() {

    const [dateToday, updateDateToday] = useState(new Date());
    const [thisWeekBeginning, updateThisWeekBeginning] = useState(getWeekBeginning());
    const [nextWeekBeginning, updateNextWeekBeginning] = useState(getWeekBeginning(7));

    useEffect(() => updateThisWeekBeginning(getWeekBeginning()), [dateToday]);
    useEffect(() => updateNextWeekBeginning(getWeekBeginning(7)), [dateToday]);

    setInterval(() => {
        const newDate = new Date();
        if (newDate.getDay() === 0 && dateToday.getDay() === 6) {
            window.location.reload();
        } else if (newDate.getDate() !== dateToday.getDate()) {
            updateDateToday(newDate);
        }
    }, 60000);

    function getWeekBeginning(addWeek = 0) {
        let newDate = new Date(),
            day = newDate.getDay();
        function padZero(n) { return n < 10 ? '0' + n : n }
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
            <h1>
                This Week
            </h1>
            <ArrangeWeek
                key={'thisWeek'}
                weekName={'This Week'}
                days={days}
                weekBeginning={thisWeekBeginning}
                isThisWeek={true}
            />
            <h2>
                Next Week
            </h2>
            <ArrangeWeek
                key={'nextWeek'}
                weekName={'Next Week'}
                days={days}
                weekBeginning={nextWeekBeginning}
                thisWeekBeginning={thisWeekBeginning}
            />
        </main>
    );
}
