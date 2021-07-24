import React, {useState, useEffect} from 'react';
import ArrangeWeek from './ArrangeWeek';
import {days} from '../../static/colorsDays';
import './arrange.css';

export default function Arrange() {

    const [dateToday, updateDateToday] = useState(new Date());
    const [thisWeekBeginning, updateThisWeekBeginning] = useState(getWeekBeginning());
    const [nextWeekBeginning, updateNextWeekBeginning] = useState(getWeekBeginning(7));

    const [ogDayToday, updateOgDayToday] = useState(dateToday.getDay());
    const [dayToday, updateDayToday] = useState(ogDayToday === 0 ? 6 : ogDayToday - 1);

    useEffect(() => updateOgDayToday(dateToday.getDay()), [dateToday]);
    useEffect(() => updateDayToday(ogDayToday === 0 ? 6 : ogDayToday - 1), [ogDayToday]);
    useEffect(() => updateThisWeekBeginning(getWeekBeginning()), [dateToday]);
    useEffect(() => updateNextWeekBeginning(getWeekBeginning(7)), [dateToday]);

    setInterval(() => {
        const newDate = new Date();
        if (newDate.getDay() === 1 && dateToday.getDay() === 0) {
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
            <ArrangeWeek
                key={'thisWeek'}
                today={dayToday}
                weekName={'This Week'}
                days={days}
                weekBeginning={thisWeekBeginning}
                isThisWeek={true}
            />
            <ArrangeWeek
                key={'nextWeek'}
                today={dayToday}
                weekName={'Next Week'}
                days={days}
                weekBeginning={nextWeekBeginning}
                thisWeekBeginning={thisWeekBeginning}
            />
        </main>
    );
}
