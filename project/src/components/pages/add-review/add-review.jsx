import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../logo/logo';
import ReviewForm from '../../review-form/review-form';
import UserBlock from '../../user-block/user-block';
import LoadingScreen from '../../loading-screen/loading-screen';
import {fetchCurrentFilm} from '../../../store/api-actions';
import {getCurrentFilm, getCurrentFilmLoadedStatus} from '../../../store/film-data/selectors';


function AddReview() {
  const filmParam = useParams();
  const currentFilm = useSelector(getCurrentFilm);
  const isCurrentFilmLoaded = useSelector(getCurrentFilmLoadedStatus);

  const dispatch = useDispatch();

  const onLoadCurrentFilm = (id) => {
    dispatch(fetchCurrentFilm(id));
  };

  useEffect(() => {
    onLoadCurrentFilm(filmParam.id);
  }, [filmParam.id]);

  if (!isCurrentFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmParam.id}`}  className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <div className="breadcrumbs__link">Add review</div>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReview;
