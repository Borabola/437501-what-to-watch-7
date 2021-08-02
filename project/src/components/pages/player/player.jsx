import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getFilms} from '../../../store/film-data/selectors';
import {redirectToRoute} from '../../../store/action';
import {getVideoTimeFormating} from '../../../utils';


function Player() {
  const filmParam = useParams();
  const films = useSelector(getFilms);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const dispatch = useDispatch();


  const currentFilm = films.find((film) => film.id === filmParam.id);

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
    if (element.fullscreen ) {
      if (document.exitFullscreen) {document.exitFullscreen();}
      else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();}
      else if (document.webkitCancelFullScreen) {document.webkitCancelFullScreen();}
      else if (document.msExitFullscreen) {document.msExitFullscreen();}
    }
    else {
      if ( element.requestFullscreen) { element.requestFullscreen();}
      else if ( element.mozRequestFullScreen)  {element.mozRequestFullScreen();}
      else if ( element.webkitRequestFullScreen) { element.webkitRequestFullScreen();}
      else if ( element.msRequestFullscreen)  {element.msRequestFullscreen();}
    }
  };

  const timeChangeHandler = (evt) => setCurrentVideoTime(evt.target.currentTime);

  const  exitButtonHandler = (id) => {
    playerRef.current = null;
    dispatch(redirectToRoute(`/films/${id}`));
  };

  return (
    <div className="player" ref={playerRef}>
      <video src={currentFilm.filmVideo} className="player__video" poster={currentFilm.filmPoster} ref={videoRef} onTimeUpdate={(evt) => timeChangeHandler(evt)} ></video>

      <button type="button" className="player__exit" onClick={() => exitButtonHandler(`${currentFilm.id}`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${currentVideoTime/currentFilm.runTime*100}`} max="100"></progress>
            <div className="player__toggler" style={{ left: `${currentVideoTime/currentFilm.runTime*100}%`, color: 'white' }}>Toggler</div>
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

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={() => fullScreenBtnHandler(videoRef.current)}>
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
