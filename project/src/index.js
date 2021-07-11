import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import films from './mocks/films';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} genre={'Drama'} releaseDate={'2014'} title={'The Grand Budapest Hotel'} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
