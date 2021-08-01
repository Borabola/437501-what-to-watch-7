import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeGenre} from '../../store/action';
import {ALL_GENRES} from '../../const';
import {filmListProp} from '../film-list/film-list.prop';
import {getGenre} from '../../store/film-data/selectors';


function GenreList(props) {
  const url = '#';
  const {films, genreFilm, onGenreClick, onChangeGenreClick} = props;

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
  genreFilm: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onChangeGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilm: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(item){
    dispatch(changeGenre(item));
  },
});

export  {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
