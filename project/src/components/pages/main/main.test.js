import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Main from './main';
import {ALL_GENRES, AuthorizationStatus} from '../../../const';
import {film} from '../../../test-mock/test-mock';


let fakeApp = null;
let history = null;
let store = null;

describe('Component: Home', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {genre: ALL_GENRES, isDataLoaded: true, isPromoLoaded: true, films: [film, film], promoFilm: film},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    );
  });

  it('should display page home', () => {

    render(fakeApp);

    screen.getAllByText(/The Grand Budapest Hotel/i).forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });
});
