import {ActionType} from './action';
import films from './../mocks/films';
import {ALL_GENRES} from '../const';

const initialState = {
  genre: ALL_GENRES,
  films: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case ActionType.GET_FILMS_WITH_GENRE:
      return {
        ...state,
        films: state.films,
      };
    default:
      return state;
  }
};


export {reducer};
