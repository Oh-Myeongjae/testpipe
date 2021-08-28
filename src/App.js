import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import Map from './MapContainer';
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=203e7359b9fc1b02acbb85ed03e2900f"></script>
const { kakao } = window;

function App() {
  useEffect(() => {
    const container = document.getElementById('myMap');
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};
    const map = new kakao.maps.Map(container, options);
    console.log('map에 들어옴')
}, []);

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
        
      <div id='myMap' style={{
            width: '500px', 
            height: '500px'      
        }}>
            <p>테스트 중입니다.</p>
            {
        console.log('map123에 들어옴')}
        </div>
      </body>
    </div>
  )}

export default App;
