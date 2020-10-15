import React from 'react';
import Home from './components/Home'
import { Router } from "@reach/router";
import AppBar from './components/AppBar'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </>
  );
}

export default App;
