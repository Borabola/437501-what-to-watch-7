import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeGenre} from '../../store/action';
import {ALL_GENRES} from '../../const';
import {filmListProp} from '../film-list/film-list.prop';
import {getGenre} from '../../store/film-data/selectors';


function GenreList(props) {
  const {films, onChangeGenreClick} = props;
  const genreFilm = useSelector(getGenre);
  const dispatch = useDispatch();
  const onGenreClick = (item) => {
    dispatch(changeGenre(item));
  };
  const url = '#';

  const genresFromFilms = Array.from(new Set(films.map(({genre}) => genre)));

  const genres = [ALL_GENRES, ...genresFromFilms];

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) => {
        const activeItem = (item === genreFilm) && 'catalog__genres-item--active';
        return (
          <li key={item} className={`catalog__genres-item ${activeItem}`}>
            <a href={url} className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(item);
              onChangeGenreClick();
            }}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

GenreList.propTypes = {
  films: filmListProp,
  onChangeGenreClick: PropTypes.func.isRequired,
};

export default GenreList;
