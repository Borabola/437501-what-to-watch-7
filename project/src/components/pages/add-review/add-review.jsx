import React, { useEffect }from 'react';
import {connect} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../logo/logo';
import ReviewForm from '../../review-form/review-form';
import UserBlock from '../../user-block/user-block';
import {ActionCreator} from '../../../store/action';
import LoadingScreen from '../../loading-screen/loading-screen';
import {fetchCurrentFilm} from '../../../store/api-actions';
import PropTypes from 'prop-types';


function AddReview({currentFilm, dispatch, isCurrentLoaded}) {
  const filmParam = useParams();

  useEffect(() => {
    const resetFilmState = () => {
      dispatch(ActionCreator.resetCurrentFilm());
    };
    resetFilmState();

    dispatch(fetchCurrentFilm(filmParam.id));

  }, [ dispatch, filmParam.id]);

  if (!isCurrentLoaded) {
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



AddReview.defaultProps = {
  currentFilm: null,
};

AddReview.propTypes = {
  currentFilm: PropTypes.shape({
    id: PropTypes.string,
    imgName: PropTypes.string,
    backgroundImage: PropTypes.string,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    filmVideo: PropTypes.string,
    filmPoster: PropTypes.string,
    description:  PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  dispatch: PropTypes.func.isRequired,
  isCurrentLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm,
  isCurrentLoaded: state.isCurrentLoaded,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
