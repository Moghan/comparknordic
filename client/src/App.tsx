import React from 'react';
import Home from './components/Home'
import GaragesView from './components/GaragesView'
import { Router } from "@reach/router";
import AppBar from './components/AppBar'
import About from './components/About'
import Contact from './components/Contact'
import Garage from './components/Garage'

function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Home path="/" />
        <GaragesView path="/garages" />
        <About path="/about" />
        <Contact path="/contact" />
        <Garage path="/garages/:garageId" />
      </Router>
    </>
  );
}

export default App;
