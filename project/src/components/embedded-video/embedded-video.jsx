import React from 'react';
import PropTypes from 'prop-types';

function EmbeddedVideo({filmVideo, filmPoster}) {

  return (
    <video className="small-film-card__video" poster={filmPoster} preload="metadata">
      <source src={filmVideo} type="video/mp4" />
    </video>
  );
}

EmbeddedVideo.propTypes = {
  filmVideo: PropTypes.string.isRequired,
  filmPoster: PropTypes.string.isRequired,
};

export default EmbeddedVideo;
