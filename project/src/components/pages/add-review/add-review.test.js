import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {ALL_GENRES, AuthorizationStatus} from '../../../const';
import AddReview from './add-review';
import * as Redux from 'react-redux';
import {film} from '../../../test-mock/test-mock';

let fakeApp = null;
let history = null;
let store = null;

describe('Component:AddReview', () => {

  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {
        genre: ALL_GENRES,
        currentFilm: film,
        isCurrentFilmLoaded: true,
        api: jest.fn()},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <AddReview />
          </Switch>
        </Router>
      </Provider>
    );
  });

  it('there must be a correct render', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    screen.getAllByText(/The Grand Budapest Hotel/i).forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    screen.getByAltText(/The Grand Budapest Hotel poster/i);
  });
});
