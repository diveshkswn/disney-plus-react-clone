/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
// import Home from './components/pages/Home';
// import Detail from './components/Detail';
// import Login from './components/pages/Login';
import AuthProvider from './context/authContext';

// code splitting
const Home = React.lazy(() => import('./components/pages/Home'));
const Detail = React.lazy(() => import('./components/Detail'));
const Login = React.lazy(() => import('./components/pages/Login'));

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          {/* Navbar */}
          <Header />
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail" component={Detail} />
              <Route exact path="/login" component={Login} />
              {/* Default path */}
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
