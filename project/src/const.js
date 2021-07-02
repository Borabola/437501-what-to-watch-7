const AppRoute = {
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ROOT: '/',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};

const Ratings = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very Good',
  AWESOME: 'Awesome',
};

const MAX_RATING = 10;

const VIDEO_DELAY = 5000;

export {AppRoute, Ratings, MAX_RATING, VIDEO_DELAY};

