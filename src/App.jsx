/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Detail from './components/Detail';

function App() {
  return (

    <div className="App">
      <Router>
        {/* Navbar */}
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />

          {/* Default path */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
