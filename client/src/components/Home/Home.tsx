import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'

export interface IHome extends RouteComponentProps {
  state: any
}

export function Home(props: IHome) {
  console.log("props.state", props.state)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Now this is the Home component.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  state
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)