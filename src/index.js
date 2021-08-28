import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Map from './MapContainer';

ReactDOM.render(
  <React.StrictMode>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=203e7359b9fc1b02acbb85ed03e2900f"></script>
    <App />
    <Map />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
