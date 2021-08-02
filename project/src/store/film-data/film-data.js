import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFavoriteFilms, loadFilms, loadPromo, loadCurrentFilm, loadSimilarFilms, loadCurrentComments, error} from '../action';
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

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteLoaded = true;
    })
    .addCase(loadPromo, (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoLoaded = true;
    })
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsLoaded = true;
    })
    .addCase(loadCurrentComments, (state, action) => {
      state.currentComments = action.payload;
      state.isCurrentCommentsLoaded = true;
    })
    .addCase(error, (state, action) => {
      state.error = action.payload;
    });
});

export {filmData};
