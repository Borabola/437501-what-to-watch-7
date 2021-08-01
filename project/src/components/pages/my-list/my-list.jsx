import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../../logo/logo';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import LoadingScreen from '../../loading-screen/loading-screen';
import FilmList from '../../film-list/film-list';
import {getFavoriteFilms, getFavoriteLoadedStatus} from '../../../store/film-data/selectors';


function MyList() {
  const favoriteFilms = useSelector(getFavoriteFilms);
  const isFavoriteLoaded = useSelector(getFavoriteLoadedStatus);

  const dispatch = useDispatch();

  const onLoadFavorite = () => {
    dispatch(fetchFavoriteFilms());
  };

  useEffect(() => {
    onLoadFavorite();
  }, [favoriteFilms]);

  if (!isFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {favoriteFilms.lenght && <FilmList films={favoriteFilms}  filmsNumber={favoriteFilms.lenght} />}
      </section>

      <PageFooter />
    </div>
  );
}

export default MyList;
