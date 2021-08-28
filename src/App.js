import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import Map from './MapContainer';
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=203e7359b9fc1b02acbb85ed03e2900f"></script>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <body>
        <Map />
      </body>
    </div>
  )}

export default App;
