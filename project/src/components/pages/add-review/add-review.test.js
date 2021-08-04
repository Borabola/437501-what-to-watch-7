import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {ALL_GENRES, AuthorizationStatus} from '../../../const';
import AddReview from './add-review';
import * as Redux from 'react-redux';

let fakeApp = null;
let history = null;
let store = null;

const film = {
  id: '1',
  imgName: 'https://some-name.jpg',
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  filmPoster: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  filmVideo: 'https://some-link',
  previewVideoLink: 'https://some-link',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Andreson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};

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
