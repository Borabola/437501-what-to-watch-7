import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App title={'The Grand Budapest Hotel'} genre={'Drama'} releaseDate={'2014'}/>
  </React.StrictMode>,
  document.getElementById('root'));
