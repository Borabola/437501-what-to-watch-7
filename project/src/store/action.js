export const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
  //GET_FILMS_WITH_GENRE: 'film/getFilmsWithGenre',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    genre,
    type: ActionType.CHANGE_GENRE,
  }),
};
