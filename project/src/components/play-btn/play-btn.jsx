import React from 'react';
import { useHistory } from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';

function PlayButton({filmId}) {
  const history = useHistory();
  const buttonClickHandler = () => {
    history.push(AppRoute.PLAYER.replace(':id', filmId));
  };
  return (
    <button className="btn btn--play film-card__button" type="button" onClick={buttonClickHandler}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

PlayButton.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default PlayButton;
