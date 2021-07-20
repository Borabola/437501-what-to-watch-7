import {ActionType} from './action';
import {ALL_GENRES} from '../const';

const initialState = {
  genre: ALL_GENRES,
  films: [],
  isDataLoaded: false,
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
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };

    default:
      return state;
  }
};


export {reducer};
