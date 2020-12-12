import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import Home from './Home';

import './App.css';

const App = () => (
  <ReduxProvider store={store}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </ReduxProvider>
);

export default App;
