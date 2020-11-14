import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './sass/main.scss';
import { Homepage } from './Components/Homepage/Homepage';
import { Room } from './Components/Room/Room';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage user={user} setUser={setUser} />;
        </Route>
        <Route path="/room">
          <Room />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
