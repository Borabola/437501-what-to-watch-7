import { ActionCreator } from './action';
import {APIRoute} from './../const';
import {filmAdapter} from './../adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map((item) => filmAdapter(item)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({promoFilm}) => dispatch(ActionCreator.loadPromo((filmAdapter(promoFilm)))))
);
