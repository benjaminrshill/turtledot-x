import React, {useState} from 'react';
import './information.css';
import {Info, Plus, Check, X} from 'react-feather';

export default function Information() {

    const [infoBox, toggleInfoBox] = useState(false);

    return (
        <>
            <Info size={16} className='info' onClick={() => toggleInfoBox(!infoBox)} />
            {infoBox &&
                <div className='info-box'>
                    <h2>ITEMS</h2>
                    <ul>
                        <li>touch the <Plus size={16} /> to add an item</li>
                        <li>enter the item's name (e.g. <i>push ups</i>, <i>meditate</i>)</li>
                        <li>choose between dot (one per day) or number (up to 100,000 per week)</li>
                        <li>enter a weekly goal number for the item (max. 7 for dots; max. 100,000 for numbers)</li>
                        <li>choose a colour for the item (similar items can be visually grouped)</li>
                        <li>touch <Check size={16} /> to save, or <X size={16} /> to cancel</li>
                        <li>touch an item to edit it</li>
                    </ul>
                    <h2>ARRANGE</h2>
                    <ul>
                        <li>items are listed for this week &amp; next week</li>
                        <li>touch an item to add it to the week</li>
                        <li>for dot items</li>
                        <li className='indent'>touch once on a given day to set it as <i>todo</i> for that day</li>
                        <li className='indent'>touch again to set it as <i>done</i> for that day</li>
                        <li>for number items</li>
                        <li className='indent'>when you've completed a number (e.g. 5,000 steps), touch the relevant square to enter it</li>
                        <li className='indent'>the number to the left of Monday tells you how many left to do that week</li>
                        <li>when you've hit the weekly target for an item, the row will turn black
                        </li>
                    </ul>
                    <h2>ARCHIVE</h2>
                    <ul>
                        <li>lists previous weeks</li>
                        <li>not editable</li>
                    </ul>
                </div>
            }
        </>
    );
}
