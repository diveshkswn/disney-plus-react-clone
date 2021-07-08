/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
