import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ALL_GENRES, AuthorizationStatus, AppRoute} from '../../const';
import App from './app';

let history = null;
let store = null;
let storeForNoAuth = null;
let fakeApp = null;
let fakeAppNoAuth = null;

const film = {
  id: '1',
  imgName: 'https://some-name.jpg',
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://some-link',
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

const films = [film];

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {genre: ALL_GENRES, isDataLoaded: true, isPromoLoaded: true, films: films, promoFilm: film},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );


    storeForNoAuth = createFakeStore({
      DATA: {genre: ALL_GENRES, isDataLoaded: true, isPromoLoaded: true, films: films, promoFilm: film},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeAppNoAuth = (
      <Provider store={storeForNoAuth}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });


  it('should render "MAIN" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
    screen.getAllByText(/The Grand Budapest Hotel/i).forEach((item) => {
      expect(item).toBeInTheDocument();
    });

  });

  it('should render "SingIn" when user navigate to "/login"', () => {
    history.push(AppRoute.SIGN_IN);
    render(fakeAppNoAuth);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "SingIn" when user navigate to "My List" without authorization', () => {
    history.push(AppRoute.MY_LIST);
    render(fakeAppNoAuth);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "My List" when user navigate to "My List" with authorization', () => {
    history.push(AppRoute.MY_LIST);
    render(fakeAppNoAuth);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });


  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/page-not-found');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Link to Main Page')).toBeInTheDocument();
  });
});
