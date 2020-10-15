import React from 'react';
import Home from './components/Home'
import { Test } from './components/Test'
import { Router, Link } from "@reach/router";
import AppBar from './components/AppBar'


function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Home path="/" />
        <Test path="/test" />
      </Router>
    </>
  );
}

export default App;
