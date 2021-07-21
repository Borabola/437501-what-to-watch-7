import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import comments from './mocks/comments';
import { fetchFilmList, fetchPromoFilm } from './store/api-actions';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchFilmList(api));
store.dispatch(fetchPromoFilm(api));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
