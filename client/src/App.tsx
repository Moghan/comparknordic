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
import Manage from './components/Manage'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from './components/Breadcrumbs'
import { loadDb } from './redux/actions'
import { connect } from 'react-redux'
import Auth from './auth/Auth'
import Callback from './components/Callback'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      maxWidth: 1200,
      margin: 'auto',
      padding: 10
    }
  }),
);

const auth = new Auth()

const handleAuthentication = (props: any) => {
  const location = props.location
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

function App({loadDb}: any) {
  const classes = useStyles();
  React.useEffect(loadDb, [])

  return (
    <div>
      <Router>
        <AppBar default auth={auth} />
      </Router>
      <div className={classes.mainContainer}>
        <Router>
          <Breadcrumbs path="/garages/*" />
        </Router>
      </div>
      <div className={classes.mainContainer}>
        <Router>
          <Home path="/" auth={auth} />
          <Callback path="/callback" handleAuthentication={handleAuthentication} />
          <GaragesView path="/garages" />
          <About path="/about" />
          <Contact path="/contact" />
          <Garage path="/garages/:garageId" />
          <Entrence path='/garages/:garageId/entrence' />
          <Entry path='/garages/:garageId/entry' />
          <Exit path='/garages/:garageId/exit' />
          <Floor path='/garages/:garageId/:level' />
          <Manage path='/manage/:garageId' />
        </Router>
      </div>
    </div>
  );
}

const mapStateToProps = ({root: {app, profile}}: any) => {
  console.log("state.app", app)
  console.log("state.profile", profile)
  return {}
}

const mapDispatchToProps = (dispatch: any) => ({
  loadDb: () => {dispatch(loadDb())}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
