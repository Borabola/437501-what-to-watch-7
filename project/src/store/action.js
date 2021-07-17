export const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    genre,
    type: ActionType.CHANGE_GENRE,
  }),
};
