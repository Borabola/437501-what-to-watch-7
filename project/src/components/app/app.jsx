import React from 'react';
import Start from '../start/start';
import PropTypes from 'prop-types';

function App({title, genre, releaseDate}) {
  return (
    <Start title={title} genre={genre} releaseDate={releaseDate}/>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default App;
