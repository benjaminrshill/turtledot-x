import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
import {Plus, BookOpen} from 'react-feather';

export default function Nav() {
    return (
        <nav>
            <NavLink to='/Items' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    <Plus size={16} />
                </div>
                <div className='menu-text'>
                    Items
                </div>
            </NavLink>
            <NavLink to='/Arrange' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    <span className='menu-icon-doit'>
                    </span>
                </div>
                <div className='menu-text'>
                    Arrange
                </div>
            </NavLink>
            <NavLink to='/Archive' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    <BookOpen size={16} />
                </div>
                <div className='menu-text'>
                    Archive
                </div>
            </NavLink>
            {/*<NavLink to='/Settings' className='menu-item' activeClassName='here'>*/}
            {/*    <div className='menu-icon'>*/}
            {/*        &#8230;*/}
            {/*    </div>*/}
            {/*    <div className='menu-text'>*/}
            {/*        Settings*/}
            {/*    </div>*/}
            {/*</NavLink>*/}
        </nav>
    );
}