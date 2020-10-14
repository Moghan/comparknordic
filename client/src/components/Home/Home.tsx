import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"


export function Home(props: RouteComponentProps) {
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