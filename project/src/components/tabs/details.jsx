import React from 'react';
//import PropTypes from 'prop-types';

function DetailsTab(props) {
  //const {index, ratingValue, onRatingChange} = props;


  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">Wes Andreson</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            Bill Murray, <br/>
            Edward Norton,<br/>
            Jude Law,<br/>
            Willem Dafoe,<br/>
            Saoirse Ronan,<br/>
            Tony Revoloru,<br/>
            Tilda Swinton,<br/>
            Tom Wilkinson,<br/>
            Owen Wilkinson,<br/>
            Adrien Brody,<br/>
            Ralph Fiennes,<br/>
            Jeff Goldblum
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">1h 39m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">Comedy</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">2014</span>
        </p>
      </div>
    </div>
  );
}

DetailsTab.propTypes = {

};

export default DetailsTab;