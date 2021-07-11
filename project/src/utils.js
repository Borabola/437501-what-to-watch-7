import {Ratings, ALL_GENRES} from './const.js';

const RatingToText = (rating) =>{
  if(rating > 0 && rating < 3){
    return Ratings.BAD;
  } else if(rating >= 3 && rating < 5) {
    return Ratings.NORMAL;
  } else if(rating >= 5 && rating < 8){
    return Ratings.GOOD;
  } else if(rating >= 8 && rating < 10){
    return Ratings.VERY_GOOD;
  } else {
    return Ratings.AWESOME;
  }
};

const getFilteredFilms = (films, genre) => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export {RatingToText, getFilteredFilms};
