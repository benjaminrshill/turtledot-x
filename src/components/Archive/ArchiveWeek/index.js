import React from 'react';
import Row from '../../Table/Row';
import '../../Arrange/arrange.css';

export default function ArchiveWeek(props) {

    return (
        <div className='week'>
            <section>
                <table>
                    <thead>
                    <tr>
                        <td className='week-date left-column'>
                            {props.week.date}
                        </td>
                        <td className='week-date'>
                        </td>
                        {props.days.map((day, i) =>
                            <td
                                key={day + i + props.week.date}
                                className='day'>
                                {day}
                            </td>
                        )}
                    </tr>
                    </thead>
                    <tbody data-dragweek={props.week.date}>
                    {props.week.items.map((item, i) =>
                        <Row
                            key={item.id + props.week.date}
                            id={item.id}
                            index={i}
                            text={item.text}
                            type={item.type}
                            number={item.number}
                            color={item.color}
                            todo={item.todo}
                            weekBeginning={props.week.date}
                        />
                    )}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
