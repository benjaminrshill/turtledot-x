import React from 'react';
import ArchiveWeek from './ArchiveWeek';
import {days} from '../../static/colors';
import '../../components/Arrange/arrange.css';

export default function Archive(props) {

    const archive = getArchive();

    function getArchive() {
        if (localStorage.getItem('archive')) {
            return JSON.parse(localStorage.getItem('archive'));
        } else return [];
    }

    function doArchiveUpdate() {
        let newA = [...archive];
        newA.forEach(week => {
            week.items.forEach(it => {
                if (!it.type) {
                    it.todo.forEach((td, i) => {
                        if (td === 2) it.todo[i] = 20;
                        if (td === 3) it.todo[i] = 30;
                    });
                }
            });
        });
        localStorage.setItem('archive', JSON.stringify(newA));
    }

    return (
        <main id='arrange'>
            <h1>
                Archive
            </h1>
            <button onClick={doArchiveUpdate} style={{background: 'blue'}}>UPDATE</button>
            {archive.map((week, i) =>
                <ArchiveWeek
                    key={'archiveWeek' + i}
                    week={week}
                    days={days}
                />
            )}
        </main>
    );
}
