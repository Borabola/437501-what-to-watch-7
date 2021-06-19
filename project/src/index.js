import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import filmList from './mocks/films';


ReactDOM.render(
  <React.StrictMode>
    <App filmList={filmList} genre={'Drama'} releaseDate={'2014'} title={'The Grand Budapest Hotel'} />
  </React.StrictMode>,
  document.getElementById('root'));
