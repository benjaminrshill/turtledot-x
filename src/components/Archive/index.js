import React from 'react';
import ArchiveWeek from './ArchiveWeek';
import {days} from '../../static/colors';
import '../../weeks.css';

export default function Archive(props) {

    const archive = getArchive();

    function getArchive() {
        if (localStorage.getItem('archive')) {
            return JSON.parse(localStorage.getItem('archive'));
        } else return [];
    }

    return (
        <main id='arrange'>
            <h1>
                Archive
            </h1>
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
