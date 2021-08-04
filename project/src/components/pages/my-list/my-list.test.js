import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import MyList from './my-list';
import {ALL_GENRES, AuthorizationStatus} from '../../../const';
import * as Redux from 'react-redux';
import {film} from '../../../test-mock/test-mock';

let fakeApp = null;
let history = null;
let store = null;

describe('Component: My list', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {genre: ALL_GENRES, isDataLoaded: true, isPromoLoaded: true, isFavoriteLoaded: true, films: [film, film], favoriteFilms: [film]},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>
    );
  });

  it('should display My List page', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    expect(screen.getByText(/The Grand Budapest Hotel/i)).toBeInTheDocument();
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
  });
});
