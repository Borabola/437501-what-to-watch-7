import React, {useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCurrentFilmById} from '../../../store/film-data/selectors';
import {getVideoTimeFormating} from '../../../utils';


function Player() {
  const filmParam = useParams();
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const currentFilm = useSelector(getCurrentFilmById(filmParam.id));

  const playBtnHandler = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const fullScreenBtnHandler = (element) => {
    if (videoRef.current.fullscreen ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    else {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const timeChangeHandler = (evt) => {
    setCurrentVideoTime(evt.target.currentTime);
    setVideoProgress(currentVideoTime/currentFilm.runTime*100);
  };

  return (
    <div className="player" ref={playerRef}>
      <video src={currentFilm.filmVideo} className="player__video" poster={currentFilm.filmPoster} ref={videoRef} onTimeUpdate={(evt) => timeChangeHandler(evt)} ></video>

      <Link to={`/films/${currentFilm.id}`} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{ left: `${videoProgress}%`, color: 'white' }}>Toggler</div>
          </div>
          <div className="player__time-value">{getVideoTimeFormating(currentFilm.runTime - currentVideoTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={playBtnHandler}>
            {isVideoPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}
          </button>

          <div className="player__name">{currentFilm.name}</div>

          <button type="button" className="player__full-screen" onClick={() => fullScreenBtnHandler()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
}

export default Player;
