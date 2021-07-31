export const adaptFilm = (incomingfilm) => ({
  id: incomingfilm.id.toString(),
  imgName: incomingfilm.preview_image,
  backgroundImage: incomingfilm.background_image,
  name: incomingfilm.name,
  posterImage: incomingfilm.poster_image,
  filmVideo: incomingfilm.video_link,
  filmPoster: incomingfilm.poster_image,
  description: incomingfilm.description,
  genre: incomingfilm.genre,
  released: incomingfilm.released,
  rating: incomingfilm.rating,
  scoresCount: incomingfilm.scores_count,
  director: incomingfilm.director,
  starring: incomingfilm.starring,
  runTime: incomingfilm.run_time,
  isFavorite: incomingfilm.is_favorite,
});

