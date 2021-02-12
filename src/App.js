import React, {useState} from 'react';
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Items from './components/Items';
import Arrange from './components/Arrange';
import Doit from './components/Doit';
import Archive from './components/Archive';
import Settings from './components/Settings';
import './app.css';

export default function App() {

  const lastWeekBeginning = getWeekBeginning(-7);
  const thisWeekBeginning = getWeekBeginning();
  const nextWeekBeginning = getWeekBeginning(7);

  function getWeekBeginning(addWeek = 0) {
    let newDate = new Date(),
        day = newDate.getDay();
    function padZero(n){ return n < 10 ? '0' + n : n}
    if (day > 1) {
      newDate.setDate(newDate.getDate() - day + 1 + addWeek);
    } else if (day === 0) {
      newDate.setDate(newDate.getDate() - 6 + addWeek);
    } else {
      newDate.setDate(newDate.getDate() + addWeek);
    }
    return newDate.getFullYear() + '/' + padZero(newDate.getMonth() + 1) + '/' + padZero(newDate.getDate());
  }

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className='bgPanel'></div>
        <Switch>
          <Route path='/Items'>
            <Items

            />
          </Route>
          <Route path='/Arrange'>
            <Arrange
                lastWeekBeginning={lastWeekBeginning}
                thisWeekBeginning={thisWeekBeginning}
                nextWeekBeginning={nextWeekBeginning}
            />
          </Route>
          <Route path='/Doit'>
            <Doit
                thisWeekBeginning={thisWeekBeginning}
            />
          </Route>
          <Route path='/Archive'>
            <Archive

            />
          </Route>
          <Route path='/Settings'>
            <Settings

            />
          </Route>
          <Route path='/'>
            <Redirect to='/Doit' />
          </Route>
        </Switch>
        <Nav />
      </Router>
  );
}
