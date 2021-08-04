import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { LocalStorageMock } from '@react-mock/localstorage';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import UserBlock from './user-block';

let fakeApp = null;
let fakeAppAuth = null;
let store = null;
let storeAuth = null;
let history = null;

describe('Component: UserBlock', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    storeAuth = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeAppAuth = (
      <Provider store={storeAuth}>
        <Router history={history}>
          <LocalStorageMock items={{ login: 'keks@gmail.com' }}>
            <UserBlock/>
          </LocalStorageMock>
        </Router>
      </Provider>
    );

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <UserBlock/>
        </Router>
      </Provider>
    );
  });

  it('should display user', () => {

    render(fakeAppAuth);

    expect(screen.getByText(/keks@gmail.com/i)).toBeInTheDocument();
  });

  it('should not display Sing in text with no user', () => {
    render(fakeApp);
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
