import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {redirectToRoute} from '../../store/action';
import {sendFavoriteFilmStatus, sendPromoFavoriteFilmStatus} from '../../store/api-actions';
import {filmProp} from '../film-list/film-list.prop';
import PropTypes from 'prop-types';

function MyListButton({film, isPromo}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const myListHandler = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onMyListClick();
    } else {
      dispatch(redirectToRoute(AppRoute.SIGN_IN));
    }
  };

  const onMyListClick = () => {
    isPromo ? dispatch(sendPromoFavoriteFilmStatus(film.id, +!film.isFavorite)) : dispatch(sendFavoriteFilmStatus(film.id, +!film.isFavorite));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={myListHandler}>
      {(film.isFavorite) ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
    </button>
  );
}

MyListButton.defaultProps = {
  isPromo: false,
};

MyListButton.propTypes = {
  film: filmProp,
  isPromo: PropTypes.bool,
};

export default MyListButton;
