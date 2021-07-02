import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../logo/logo';
import ReviewForm from '../../review-form/review-form';
import {filmListProp} from '../../film-list/film-list.prop';
import {AppRoute} from '../../../const';


function AddReview({films}) {
  const url = '#';
  const filmParam = useParams();
  const currentFilm = films.find((film) => film.id === filmParam.id);

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

          <ul className="user-block">
            <li className="user-block__item">
              <Link to={AppRoute.MY_LIST} className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </li>
            <li className="user-block__item">
              <a href={url} className="user-block__link">Sign out</a>
            </li>
          </ul>
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

AddReview.propTypes = {
  films: filmListProp,
};

export default AddReview;
