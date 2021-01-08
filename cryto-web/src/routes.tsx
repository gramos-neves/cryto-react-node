import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import ChangeCoins from './pages/changeCoins';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/changeCoins" component={ChangeCoins} />

      </Switch>
    </BrowserRouter>
  )
}


export default Routes