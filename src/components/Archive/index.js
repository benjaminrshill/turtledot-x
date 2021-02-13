import React from 'react';
import ArrangeWeek from '../Arrange/ArrangeWeek';
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
                <ArrangeWeek
                    key={'archiveWeek' + i}
                    weekName={''}
                    weekBeginning={week.date}
                    week={week}
                    archive={true}
                    editable={false}
                />
            )}
        </main>
    );
}
