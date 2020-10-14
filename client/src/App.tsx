import React from 'react';
import { Home } from './components/Home'
import { Test } from './components/Test'
import { Router, Link } from "@reach/router";


function App() {
  return (
    <>
      <div>
        <h1>Compark Nordic</h1>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/test">Test</Link>
        </nav>
      </div>
      <Router>
        <Home path="/" />
        <Test path="/test" />
      </Router>
    </>
  );
}

export default App;
