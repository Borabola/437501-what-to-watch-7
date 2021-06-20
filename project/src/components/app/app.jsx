import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/main/main';
import SingIn from '../pages/sing-in/sing-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import ReviewFormPage from '../review-form-page/review-form-page';
import PropTypes from 'prop-types';
import NotFound from '../pages/not-found/not-found';
import filmListProp from '../film-list/film-list.prop';

function App({filmList, genre, releaseDate, title}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main filmList={filmList}
            genre={genre}
            releaseDate={releaseDate}
            title={title}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn/>
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList filmList={filmList} />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview filmList={filmList} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player filmVideo={filmList[0].filmVideo} filmPoster={filmList[0].filmPoster} />
        </Route>
        <Route exact path={AppRoute.REVIEW_FORM_PAGE}>
          <ReviewFormPage filmVideo={filmList[0].filmVideo} filmPoster={filmList[0].filmPoster} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  filmList: filmListProp,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default App;
