import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import GenreList from './genre-list';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import {film} from '../../test-mock/test-mock';

const films = [film];

let fakeApp = null;
let store = null;

describe('Component: GenreItem', () => {
  beforeAll(() => {

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {isDataLoaded: true, films: [film, film], promoFilm: film},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <GenreList films={films} onChangeGenreClick={jest.fn()}/>
      </Provider>
    );
  });

  it('should display genre item', () => {

    render(fakeApp);
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });
});
