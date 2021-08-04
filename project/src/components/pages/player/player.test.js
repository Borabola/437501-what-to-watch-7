import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import Player from './player';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {AppRoute, AuthorizationStatus} from '../../../const';
import NotFound from '../not-found/not-found';

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

describe('Component: Player', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.requestFullscreen = jest.fn();
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {isDataLoaded: true, films: [film, film], promoFilm: film},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });


  it('should display Player', () => {
    history.push('/player/1');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.PLAYER} render={() => <Player/>}/>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/The Grand Budapest Hotel/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it('should display page player not found', () => {
    const ERROR_URL = '/player/3';
    history.push(ERROR_URL);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={'/player/1'} render={() => <Player/>}/>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Link to Main Page')).toBeInTheDocument();
  });

  it('redirect to film page after click on the exit button', () => {
    history.push('/player/1');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={'/films/1'} exact>
              <h1>The Grand Budapest Hotel</h1>
            </Route>
            <Route exact path={AppRoute.PLAYER} render={() => <Player/>}/>
          </Switch>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(/Exit/i));
    history.push('/films/1');
    expect(screen.getByText(/The Grand Budapest Hotel/i)).toBeInTheDocument();
  });

  it('should expand the player to full screen', () => {
    history.push('/player/1');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.PLAYER} render={() => <Player/>}/>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('full-screen'));
    expect(document.fullscreenElement).not.toBe(null);
  });

  it('should start playing after play button click', () => {
    history.push('/player/1');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.PLAYER} render={() => <Player/>}/>
        </Router>
      </Provider>,
    );

    expect(screen.queryByTestId('pause')).toBe(null);
    userEvent.click(screen.getByTestId('play'));
    expect(screen.getByTestId('pause')).toBeInTheDocument();
  });
});
