import React from 'react';
import './settings.css';

export default function Settings() {

    function clearItems() {
        if (window.confirm('Really delete all items? This cannot be undone!')) {
            localStorage.removeItem('items');
        }
    }

    function clearWeeks() {
        if (window.confirm('Really delete all weeks? This cannot be undone!')) {
            localStorage.removeItem('weeks');
        }
    }

    return (
        <main>
            <section className='clear'>
                <button
                    className='clear-button'
                    onClick={clearItems}>
                    clear items
                </button>
                <button
                    className='clear-button'
                    onClick={clearWeeks}>
                    clear weeks
                </button>
            </section>
        </main>
    );
}
