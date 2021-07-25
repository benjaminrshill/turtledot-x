import React, { useState } from 'react';
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Modal from './components/Modal';
import Header from './components/Header';
import Nav from './components/Nav';
import Items from './components/Items';
import Arrange from './components/Arrange';
import Archive from './components/Archive';
import Information from './components/Information';
import {Info} from 'react-feather';
import './app.css';

export default function App() {

    const [infoBox, toggleInfoBox] = useState(false);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Info size={16} className='info' onClick={() => toggleInfoBox(true)} />
            {infoBox &&
                <Modal
                    name={'info'}
                    onToggleModal={toggleInfoBox}
                    modal={
                        <Information
                            onToggleModal={toggleInfoBox}
                        />
                    }
                />
            }
            <div className='bgPanel'>
            </div>
            <Switch>
                <Route path='/Items'>
                    <Items />
                </Route>
                <Route path='/Arrange'>
                    <Arrange />
                </Route>
                <Route path='/Archive'>
                    <Archive />
                </Route>
                <Route path='/'>
                    <Redirect to='/Arrange' />
                </Route>
            </Switch>
            <Nav />
        </Router>
    );
}
