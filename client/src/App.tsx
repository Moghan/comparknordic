import React from 'react';
import Home from './components/Home'
import GaragesView from './components/GaragesView'
import { Router } from "@reach/router";
import AppBar from './components/AppBar'
import About from './components/About'
import Contact from './components/Contact'
import Garage from './components/Garage'
import Entrence from './components/Entrence'
import Entry from './components/Entry'
import Exit from './components/Exit'
import Floor from './components/Floor'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      maxWidth: 1200,
      margin: 'auto'
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <div className={classes.mainContainer}>
        <Router>
          <Home path="/" />
          <GaragesView path="/garages" />
          <About path="/about" />
          <Contact path="/contact" />
          <Garage path="/garages/:garageId" />
          <Entrence path='/garages/:garageId/entrence' />
          <Entry path='/garages/:garageId/entry' />
          <Exit path='/garages/:garageId/exit' />
          <Floor path='/garages/:garageId/:level' />
        </Router>
      </div>
    </div>
  );
}

export default App;
