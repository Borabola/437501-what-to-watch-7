import {ALL_GENRES, MINUTE, Ratings} from './const.js';

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
const getTimeFormate = (number) => {
  const minutes = number % MINUTE;
  const hours = (number - minutes) / MINUTE;

  let result = 0;
  if (hours > 0) {
    result = `${hours}h`;
  }
  if (minutes > 0) {
    result += (minutes <= 9) ? ` 0${minutes}m` : ` ${minutes}m`;
  }

  return result.trim();
};

const getFilteredFilms = (films, genre) => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export {getFilteredFilms, getTimeFormate, RatingToText};
