import React, {useState, useEffect, useRef} from 'react';
import {VIDEO_DELAY} from '../../const';
import PropTypes from 'prop-types';

function EmbeddedVideo({filmVideo, filmPoster, isPlaying}) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.onloadeddata = () => setIsLoading(false);

    return () => {
      if (videoRef.current) {
        videoRef.current.onloadeddata = null;
        videoRef.current.onplay = null;
        videoRef.current.onpause = null;
        videoRef.current = null;
      }
    };
  }, [filmVideo]);

  useEffect(() => {
    const hoverTimer = setTimeout(() => {
      if (isPlaying && videoRef) {
        videoRef.current.play();
      }
    }, VIDEO_DELAY);

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      clearTimeout(hoverTimer);
      
    } 
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
