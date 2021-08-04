import {
  changeGenre,
  loadFilms,
  loadPromo,
  loadCurrentFilm,
  loadCurrentComments,
  loadFavoriteFilms,
  loadSimilarFilms,
  requireAuthorization,
  logout,
  redirectToRoute,
  updateFavoriteFilm,
  error,
  ActionType
} from './action';

describe('Actions', () => {
  it('Action creator for changing genre.', () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'drama',
    };

    const genre = 'drama';

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it('Action creator for load films.', () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: [
        {id: '1'},
        {id: '2'},
      ],
    };

    const films = [
      {id: '1'},
      {id: '2'},
    ];

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it('Action creator for loading promo film.', () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: {
        id: '1',
        name: 'Johnny English',
      },
    };

    const film = {
      id: '1',
      name: 'Johnny English',
    };

    expect(loadPromo(film)).toEqual(expectedAction);
  });

  it('Action creator for loading current film.', () => {
    const expectedAction = {
      type: ActionType.LOAD_CURRENT_FILM,
      payload: {
        id: '1',
        name: 'Johnny English',
      },
    };

    const film = {
      id: '1',
      name: 'Johnny English',
    };

    expect(loadCurrentFilm(film)).toEqual(expectedAction);
  });

  it('Action creator for loading current comments.', () => {
    const expectedAction = {
      type: ActionType.LOAD_CURRENT_COMMENTS,
      payload: [
        {
          id: 1,
          rating: 6.5,
          comment:'I love this movie.',
        },
        {
          id: 1,
          rating: 2,
          comment: 'I don’t love this movie.',
        },
      ],
    };

    const comments = [
      {
        id: 1,
        rating: 6.5,
        comment:'I love this movie.',
      },
      {
        id: 1,
        rating: 2,
        comment: 'I don’t love this movie.',
      },
    ];

    expect(loadCurrentComments(comments)).toEqual(expectedAction);
  });

  it('Action creator for load favorite films.', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: [
        {id: '1'},
        {id: '2'},
      ],
    };

    const films = [
      {id: '1'},
      {id: '2'},
    ];

    expect(loadFavoriteFilms(films)).toEqual(expectedAction);
  });

  it('Action creator for load similar films.', () => {
    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: [
        {id: '1'},
        {id: '2'},
      ],
    };

    const films = [
      {id: '1'},
      {id: '2'},
    ];

    expect(loadSimilarFilms(films)).toEqual(expectedAction);
  });

  it('Action creator for user authorization is true.', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload:'AUTH',
    };

    const userStatus = 'AUTH';

    expect(requireAuthorization(userStatus)).toEqual(expectedAction);
  });

  it('Action creator for user logout.', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('Action creator for redirect to some url.', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/films',
    };
    const url = '/films';

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('Action creator for updating current film favorite status.', () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVIRITE_FILM,
      payload: {
        id: '1',
        name: 'Johnny English',
        isFavorite: 'true',
      },
    };

    const film = {
      id: '1',
      name: 'Johnny English',
      isFavorite: 'true',
    };

    expect(updateFavoriteFilm(film)).toEqual(expectedAction);
  });

  it('Action creator for get server error.', () => {
    const expectedAction = {
      type: ActionType.ERROR,
      payload: 'Network Error',
    };

    const serverError = 'Network Error';

    expect(error(serverError)).toEqual(expectedAction);
  });
});
