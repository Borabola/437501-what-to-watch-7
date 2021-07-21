import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/main/main';
import SingIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import PropTypes from 'prop-types';
import NotFound from '../pages/not-found/not-found';
import reviewsList from '../../mocks/comments';
import {reviewListProp} from '../tabs/review.prop';
import LoadingScreen from '../loading-screen/loading-screen';
import { connect } from 'react-redux';

function App({comments, isDataLoaded, isPromoLoaded}) {
  if(!isDataLoaded && !isPromoLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn/>
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList   />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film   comments={comments} />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview   reviewsList={reviewsList} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  comments: reviewListProp,
  isDataLoaded: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  isPromoLoaded: state.isPromoLoaded,
  promoFilm: state.promoFilm,
});

export {App};
export default connect(mapStateToProps, null)(App);
