import { ActionCreator } from './action';
import {APIRoute} from './../const';
import {adaptFilm} from './../adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map((item) => adaptFilm(item)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.loadPromo((adaptFilm(data)))))
);
