export const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'film/loadPromo',
  LOAD_CURRENT: 'film/loadCurrent',
  LOAD_CURRENT_COMMENTS: 'comments/loadCurrent',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  REDIRECT_TO_ROUTE: 'film/redirectToRoute',
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
  type: ActionType.LOAD_CURRENT,
  payload: currentFilm,
});

export const  loadCurrentComments = (currentComments) => ({
  type: ActionType.LOAD_CURRENT_COMMENTS,
  payload: currentComments,
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
