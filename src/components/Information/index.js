import React from 'react';
import './information.css';

export default function Information(props) {

    return (
        <>
            <h2>ITEMS</h2>
            <ul>
                <li>add items: name, type, number, colour</li>
                <li>type: choose between dot (one per day) or number (up to 100,000 per week)</li>
                <li>enter a weekly goal number for the item</li>
                <li>choose a colour (so similar items can be visually grouped)</li>
            </ul>
            <h2>ARRANGE</h2>
            <ul>
                <li>touch an item on the list to add it to the week</li>
                <li>for dot items:</li>
                <li className='indent'>touch a cell to set as <i>todo</i> for that day</li>
                <li className='indent'>touch again to set as <i>done</i></li>
                <li>for number items:</li>
                <li className='indent'>touch a cell to select from options panel</li>
                <li>the number to the left of Monday tells you how many left to do that week</li>
                <li>when you've hit the weekly target for an item, the row will turn black</li>
            </ul>
            <h2>ARCHIVE</h2>
            <ul>
                <li>lists previous weeks</li>
                <li>not editable</li>
            </ul>
        </>
    );
}
