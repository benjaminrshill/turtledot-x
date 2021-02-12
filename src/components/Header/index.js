import React from 'react';
import turtledot from './turtledot.svg';
import './header.css';

export default function Header() {
    return (
        <header>
            <img src={turtledot} className='logo' alt='logo' />
        </header>
    );
}
