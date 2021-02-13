import React from 'react';
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Items from './components/Items';
import Arrange from './components/Arrange';
import Archive from './components/Archive';
import Settings from './components/Settings';
import './app.css';

export default function App() {


  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className='bgPanel'></div>
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
          <Route path='/Settings'>
            <Settings />
          </Route>
          <Route path='/'>
            <Redirect to='/Arrange' />
          </Route>
        </Switch>
        <Nav />
      </Router>
  );
}
