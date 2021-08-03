import {filmData} from './film-data';
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

const films = [{
  id:  '6 ',
  imgName: 'https://7.react.pages.academy/static/film/preview/legend.jpg ',
  backgroundImage: 'https://7.react.pages.academy/static/film/background/legend.jpg ',
  name: 'Legend ',
  posterImage:  'https://7.react.pages.academy/static/film/poster/Legend.jpg ',
  filmVideo:  'http://media.xiph.org/mango/tears_of_steel_1080p.webm ',
  filmPoster:  'https://7.react.pages.academy/static/film/poster/Legend.jpg ',
  description:  'Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s. ',
  genre:  'Crime ',
  released : 2015,
  rating : 3.5,
  scoresCount : 240,
  director : 'Brian Helgeland ',
  runTime : 132,
  isFavorite : true,
  currentComments : [],
  favoriteFilms : [],
  similarFilms : [],
  isDataLoaded : true,
  isFavoriteLoaded : false,
  isPromoLoaded : true,
  isCurrentFilmLoaded : true,
  isCurrentCommentsLoaded : false,
  isSimilarFilmsLoaded : false,
}];

const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director funniest and most exquisitely designed movies in years.',
    date: '2019-05-08T14:13:56.569Z',
  },
];

const serverError = 'Network Error';


describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData(undefined, {}))
      .toEqual(initialState);
  });

  it('should change genre to given genre', () => {
    const state = {initialState};
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'drama',
    };

    expect(filmData(state, changeGenreAction))
      .toEqual({...state, genre: 'drama'});
  });

  it('should load films', () => {
    const state = initialState;
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(filmData(state, loadFilmsAction)).toEqual({...state, films, isDataLoaded: true});
  });

  it('should load favorite films', () => {
    const state = initialState;
    const loadFavoriteFilmsAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(filmData(state, loadFavoriteFilmsAction)).toEqual({...state, favoriteFilms: films, isFavoriteLoaded: true});
  });

  it('should load promo film', () => {
    const state = initialState;
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO,
      payload: films[0],
    };

    expect(filmData(state, loadPromoFilmAction)).toEqual({...state, promoFilm: films[0], isPromoLoaded: true});
  });

  it('should load current film', () => {
    const state = initialState;
    const loadCurrentFilmAction = {
      type: ActionType.LOAD_CURRENT_FILM,
      payload: films[0],
    };

    expect(filmData(state, loadCurrentFilmAction)).toEqual({...state, currentFilm: films[0], isCurrentFilmLoaded: true});
  });

  it('should load similar films', () => {
    const state = initialState;
    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: films,
    };

    expect(filmData(state, loadSimilarFilmsAction)).toEqual({...state, similarFilms: films, isSimilarFilmsLoaded: true});
  });

  it('should load current comments', () => {
    const state = initialState;
    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_CURRENT_COMMENTS,
      payload: comments,
    };

    expect(filmData(state, loadSimilarFilmsAction)).toEqual({...state, currentComments: comments, isCurrentCommentsLoaded: true});
  });

  it('should load server error', () => {
    const state = initialState;
    const loadServerErrorAction = {
      type: ActionType.ERROR,
      payload: serverError,
    };

    expect(filmData(state, loadServerErrorAction)).toEqual({...state, error: serverError });
  });

  it('should update current film options', () => {
    const state = initialState;
    const updateFavoriteFilmAction = {
      type: ActionType.UPDATE_FAVIRITE_FILM,
      payload: films[0],
    };

    expect(filmData(state, updateFavoriteFilmAction)).toEqual({...state, currentFilm: films[0]});
  });

  it('should update promo film options', () => {
    const state = initialState;
    const updateFavoriteFilmAction = {
      type: ActionType.UPDATE_PROMO_FAVIRITE_FILM,
      payload: films[0],
    };

    expect(filmData(state, updateFavoriteFilmAction)).toEqual({...state, promoFilm: films[0]});
  });
});

