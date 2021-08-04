import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus} from '../../const';
import MyListButton from './my-list-button';
import {ALL_GENRES} from '../../const';
import {film} from '../../test-mock/test-mock';


let history = null;
let store = null;
let fakeApp = null;

describe('Component: MyListButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {genre: ALL_GENRES, isDataLoaded: true, isPromoLoaded: true, currentFilm: film},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <MyListButton  film={film}/>
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
