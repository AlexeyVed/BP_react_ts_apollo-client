import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Main from './Main'
import List from './List'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/list" component={List} />
    </Switch>
  );
};

export default App;