import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/main/main';
import SingIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import PropTypes from 'prop-types';
import NotFound from '../pages/not-found/not-found';
import reviewsList from '../../mocks/comments';
import {reviewListProp} from '../tabs/review.prop';
import LoadingScreen from '../loading-screen/loading-screen';
import { connect } from 'react-redux';
import browserHistory from '../../browser-history';

function App({comments, isDataLoaded, isPromoLoaded}) {
  if(!isDataLoaded || !isPromoLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <Film   comments={comments} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={() => <AddReview   reviewsList={reviewsList} />}
        >
        </PrivateRoute>
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
