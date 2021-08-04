import React from 'react';
import PropTypes from 'prop-types';

function BtnShowMore({onBtnClick}) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onBtnClick}>Show more</button>
    </div>
  );
}

BtnShowMore.propTypes = {
  onBtnClick: PropTypes.func,
};

export default BtnShowMore;
