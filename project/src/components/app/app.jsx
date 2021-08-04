import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/main/main';
import SingIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../pages/not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import {useSelector} from 'react-redux';
import {getLoadedDataStatus, getPromoLoadedStatus} from '../../store/film-data/selectors';

function App() {
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const isPromoLoaded = useSelector(getPromoLoadedStatus);

  if(!isDataLoaded || !isPromoLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
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
        <Film  />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.ADD_REVIEW}
        render={() => <AddReview />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.PLAYER}>
        <Player />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
