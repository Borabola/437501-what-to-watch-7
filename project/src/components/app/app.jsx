import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/main/main';
import SingIn from '../pages/sing-in/sing-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import PropTypes from 'prop-types';
import NotFound from '../pages/not-found/not-found';
import filmListProp from '../film-list/film-list.prop';
import reviewsList from '../../mocks/reviews';

function App({films, genre, releaseDate, title}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main films={films}
            genre={genre}
            releaseDate={releaseDate}
            title={title}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn/>
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList films={films} />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film films={films} />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview films={films} reviewsList={reviewsList} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player filmVideo={films[0].filmVideo} filmPoster={films[0].filmPoster} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: filmListProp,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default App;
