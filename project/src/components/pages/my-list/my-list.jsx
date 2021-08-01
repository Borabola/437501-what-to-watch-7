import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Logo from '../../logo/logo';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import {filmPropDefault} from '../../film-list/film-list.prop';
import PropTypes from 'prop-types';


function MyList({favoriteFilms, onLoadFavorite}) {

  useEffect(() => {
    onLoadFavorite();
  }, [  onLoadFavorite ]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoriteFilms}  filmsNumber={favoriteFilms.lenght} />
      </section>

      <PageFooter />
    </div>
  );
}

MyList.defaultProps = {
  favoriteFilms: null,
};

MyList.propTypes = {
  favoriteFilms: filmPropDefault,
  onLoadFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoriteFilms: DATA.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorite() {
    dispatch(fetchFavoriteFilms());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
