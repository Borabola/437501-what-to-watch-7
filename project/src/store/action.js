export const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'film/loadPromo',
  LOAD_CURRENT: 'film/loadCurrent',
  RESET_CURRENT: 'film/resetCurrentFilm',
  LOAD_CURRENT_COMMENTS: 'comments/loadCurrent',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  RESET_SIMILAR_FILMS: 'data/resetSimilarFilms',
  RESET_CURRENT_COMMENTS: 'comments/resetCurrentComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  ERROR: 'data/error',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    genre,
    type: ActionType.CHANGE_GENRE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promoFilm) => ({
    type: ActionType.LOAD_PROMO,
    payload: promoFilm,
  }),
  loadCurrentFilm: (currentFilm) => ({
    type: ActionType.LOAD_CURRENT,
    payload: currentFilm,
  }),
  resetCurrentFilm: () => ({
    type: ActionType.RESET_CURRENT,
  }),
  loadCurrentComments: (currentComments) => ({
    type: ActionType.LOAD_CURRENT_COMMENTS,
    payload: currentComments,
  }),
  resetCurrentComments: () => ({
    type: ActionType.RESET_CURRENT_COMMENTS,
  }),
  loadSimilarFilms: (films) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: films,
  }),
  resetSimilarFilms: () => ({
    type: ActionType.RESET_SIMILAR_FILMS,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  error: (err) => ({
    type: ActionType.ERROR,
    payload: err,
  }),

};
