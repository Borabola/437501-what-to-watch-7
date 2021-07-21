export const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'data/loadPromo',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    genre,
    type: ActionType.CHANGE_GENRE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promoFilm) => ({
    type: ActionType.LOAD_PROMO,
    payload: promoFilm,
  }),

};
