import {NameSpace} from '../root-reducer';

export const getError = (state) => state[NameSpace.DATA].error;
export const getFilms = (state) => state[NameSpace.DATA].films;
export const getGenre = (state) => state[NameSpace.DATA].genre;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getCurrentFilm = (state) => state[NameSpace.DATA].currentFilm;
export const getCurrentComments = (state) => state[NameSpace.DATA].currentComments;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getSimilarFilms = (state) => state[NameSpace.DATA].similarFilms;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getFavoriteLoadedStatus = (state) => state[NameSpace.DATA].isFavoriteLoaded;
export const getPromoLoadedStatus = (state) => state[NameSpace.DATA].isPromoLoaded;
export const getCurrentFilmLoadedStatus = (state) => state[NameSpace.DATA].isCurrentFilmLoaded;
export const getCurrentCommentsLoadedStatus = (state) => state[NameSpace.DATA].isCurrentCommentsLoaded;
export const getSimilarFilmsLoadedtatus = (state) => state[NameSpace.DATA].isSimilarFilmsLoaded;
