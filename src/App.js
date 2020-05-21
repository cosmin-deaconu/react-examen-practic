import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Page404 from './pages/Page404';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/people' component={People} />
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
