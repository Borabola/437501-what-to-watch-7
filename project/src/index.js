import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import rootReducer from './store/root-reducer';
import {requireAuthorization} from './store/action';
import App from './components/app/app';
import {checkAuth, fetchFilmList, fetchPromoFilm } from './store/api-actions';
import {AuthorizationStatus} from './const';
import { redirect } from './store/middlewares/redirect';
import browserHistory from './browser-history';

const api = createAPI(requireNoAuthCallback);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

function requireNoAuthCallback() {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
}

store.dispatch(checkAuth());
store.dispatch(fetchFilmList(api));
store.dispatch(fetchPromoFilm(api));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
