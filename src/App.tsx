import React, { FC } from 'react';
import paw from './assets/paw.svg';
import Dashboard from './containers/Dashboard';

const App: FC = () => {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
      </style>

      <header className="App-header">
        <img src={paw} className="App-logo" alt="logo" />
        <h1>PETS CLASSIFIED</h1>
      </header>
      <hr id="header-hr" />
      <p>
        Extra Extra! read all about it! Good to see you! Adds brought to you by
        Coral Fussman, listings are purely fiction. Contact Petfinder for
        serious inquiries
      </p>
      <hr id="header-hr" />
      <Dashboard />
      <p id="p-sign">made with intention 🐾</p>
    </div>
  );
};

export default App;
