const ALL_GENRES = 'All genres';

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FAVORITE_FILMS: '/favorite',
  FILMS: '/films',
  LOGIN: '/login',
  LOGOUT: '/logout',
  PROMO_FILM: '/promo',
};

const AppRoute = {
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ROOT: '/',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  PAGE_NOT_FOUND: '/page-not-found',
};

const FilmsCount = {
  MAIN: 8,
  SIMILAR: 4,
};

const MAX_RATING = 10;
const MINUTE = 60;

const Ratings = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very Good',
  AWESOME: 'Awesome',
};

const TabLabels = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

const VIDEO_DELAY = 1000;

export {ALL_GENRES, AuthorizationStatus, AppRoute, FilmsCount, MAX_RATING, MINUTE, Ratings, TabLabels, VIDEO_DELAY};

