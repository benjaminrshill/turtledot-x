import React from 'react';
import './settings.css';

export default function Settings() {

    function clearItems() {
        if (window.confirm('Really delete all items? This cannot be undone!')) {
            localStorage.removeItem('items');
            this.setState({
                items: []
            });
        }
    }

    function clearWeeks() {
        if (window.confirm('Really delete all weeks? This cannot be undone!')) {
            localStorage.removeItem('weeks');
            this.setState({
                weeks: [
                    {
                        date: '',
                        items: []
                    }
                ]
            });
        }
    }

    function clearAll() {
        if (window.confirm('Really delete all data? This cannot be undone!')) {
            localStorage.clear();
            this.setState({
                items: [],
                weeks: [
                    {
                        date: '',
                        items: []
                    }
                ]
            });
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
                <button
                    className='clear-button'
                    onClick={clearAll}>
                    clear all
                </button>
            </section>
        </main>
    );
}
