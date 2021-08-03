import {createAction} from '@reduxjs/toolkit';

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
  UPDATE_FAVIRITE_FILM: 'data/updateFaviriteFilm',
  UPDATE_PROMO_FAVIRITE_FILM: 'data/updatePromoFaviriteFilm',
  LOGOUT: 'user/logout',
  ERROR: 'data/error',
};


export const  changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
  type: ActionType.CHANGE_GENRE,
}));

export const  loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const  loadPromo = createAction(ActionType.LOAD_PROMO, (promoFilm) => ({
  payload: promoFilm,
}));

export const  loadCurrentFilm = createAction(ActionType.LOAD_CURRENT_FILM, (currentFilm) => ({
  payload: currentFilm,
}));

export const  loadCurrentComments = createAction(ActionType.LOAD_CURRENT_COMMENTS, (currentComments) => ({
  payload: currentComments,
}));

export const  loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (favoriteFilms) => ({
  payload: favoriteFilms,
}));

export const  loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const  requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const  logout = createAction(ActionType.LOGOUT);

export const  redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
export const updateFavoriteFilm = createAction(ActionType.UPDATE_FAVIRITE_FILM, (film) => ({
  payload: film,
}));
export const updatePromoFavoriteFilm = createAction(ActionType.UPDATE_PROMO_FAVIRITE_FILM, (film) => ({
  payload: film,
}));
export const  error = createAction(ActionType.ERROR, (err) => ({
  payload: err,
}));
