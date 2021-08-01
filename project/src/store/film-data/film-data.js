import {ActionType} from '../action';
import {ALL_GENRES} from '../../const';

const initialState = {
  error: null,
  films: [],
  genre: ALL_GENRES,
  promoFilm: {},
  currentFilm: {},
  currentComments: [],
  favoriteFilms: [],
  similarFilms: [],
  isDataLoaded: false,
  isFavoriteLoaded: false,
  isPromoLoaded: false,
  isCurrentFilmLoaded: false,
  isCurrentCommentsLoaded: false,
  isSimilarFilmsLoaded: false,
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_WITH_GENRE:
      return {
        ...state,
        films: state.films,
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload,
        isFavoriteLoaded: true,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoLoaded: true,
      };
    case ActionType.LOAD_CURRENT_FILM:
      return {
        ...state,
        currentFilm: action.payload,
        isCurrentFilmLoaded: true,
      };
    case ActionType.RESET_CURRENT:
      return {
        ...state,
        currentFilm: {},
        isCurrentFilmLoaded: false,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
        isSimilarFilmsLoaded: true,
      };
    case ActionType.RESET_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: [],
        isSimilarFilmsLoaded: false,
      };
    case ActionType.LOAD_CURRENT_COMMENTS:
      return {
        ...state,
        currentComments: action.payload,
        isCurrentCommentsLoaded: true,
      };
    case ActionType.RESET_CURRENT_COMMENTS:
      return {
        ...state,
        currentComments: [],
        isCurrentCommentsLoaded: false,
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {filmData};
