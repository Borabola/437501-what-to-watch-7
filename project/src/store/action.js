export const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  LOAD_CURRENT_FILM: 'data/loadCurrentFilm',
  LOAD_CURRENT_COMMENTS: 'data/loadCurrentComments',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  REDIRECT_TO_ROUTE: 'application/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  ERROR: 'data/error',
};


export const  changeGenre = (genre) => ({
  genre,
  type: ActionType.CHANGE_GENRE,
});

export const  loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const  loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});

export const  loadCurrentFilm = (currentFilm) => ({
  type: ActionType.LOAD_CURRENT_FILM,
  payload: currentFilm,
});

export const  loadCurrentComments = (currentComments) => ({
  type: ActionType.LOAD_CURRENT_COMMENTS,
  payload: currentComments,
});

export const  loadFavoriteFilms = (favoriteFilms) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: favoriteFilms,
});

export const  loadSimilarFilms = (films) => ({
  type: ActionType.LOAD_SIMILAR_FILMS,
  payload: films,
});

export const  requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const  logout = () => ({
  type: ActionType.LOGOUT,
});

export const  redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const  error = (err) => ({
  type: ActionType.ERROR,
  payload: err,
});
