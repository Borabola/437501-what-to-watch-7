import React, {useState, useEffect, useRef} from 'react';
import {VIDEO_DELAY} from '../../const';
import PropTypes from 'prop-types';

function EmbeddedVideo({filmVideo, filmPoster, isPlaying}) {

  const videoRef = useRef();

  useEffect(() => {
    const hoverTimer = setTimeout(() => {
      if (isPlaying) {
        videoRef.current.play();
      }
    }, VIDEO_DELAY);

    return () => {
      videoRef.current.pause();
      clearTimeout(hoverTimer);
    };
  }, [isPlaying]);


  return (
    <video className="small-film-card__video" poster={filmPoster} preload="metadata" ref={videoRef} src={filmVideo} muted />
  );
}

EmbeddedVideo.propTypes = {
  filmVideo: PropTypes.string.isRequired,
  filmPoster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
};

export default EmbeddedVideo;
