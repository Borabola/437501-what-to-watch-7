import React from 'react';
import Start from '../start/start';
import PropTypes from 'prop-types';

function App({title, genre, releaseDate, filmList}) {
  return (
    <Start title={title} genre={genre} releaseDate={releaseDate} filmList={filmList}/>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  filmList: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    imgName: PropTypes.string.isRequired,
    filmTitle: PropTypes.string.isRequired,
  }),
};

export default App;
