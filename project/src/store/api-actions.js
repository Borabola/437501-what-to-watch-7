import {error, loadCurrentComments, loadCurrentFilm, loadFavoriteFilms, loadFilms, loadPromo, loadSimilarFilms, logout as closeSession, redirectToRoute, requireAuthorization} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from './../const';
import {adaptFilm} from './../adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map((item) => adaptFilm(item)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromo((adaptFilm(data)))))
);

export const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}` )
    .then(({data}) => dispatch(loadCurrentFilm((adaptFilm(data)))))
    .catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS )
    .then(({data}) => dispatch(loadFavoriteFilms(data.map((item) => adaptFilm(item)))))
    .catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchCurrentComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}` )
    .then(({data}) => dispatch(loadCurrentComments(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchSimilarFilmList = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarFilms(data.map((item) => adaptFilm(item)))))
    .catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const sendComments = (comment, id, rating) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .catch((err) => dispatch(error(err.message)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('login', email);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.Main)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);
