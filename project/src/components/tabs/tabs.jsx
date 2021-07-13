import React, { useState } from 'react';
//import ReviewsTab from './reviews';
//import OverviewTab from './review';
//import {reviewListProp} from './review.prop';
//import {filmProp} from '../film-list/film-list.prop';
import {TabsLabels} from '../../const';

import PropTypes from 'prop-types';

function Tabs({children}) {

  const [activeTab, setActiveTab]= useState(children[0].props.label);
  const tabHandle = (evt, newActiveTab) => {
    evt.preventDefault();
    setActiveTab(newActiveTab);
  };

  const url = '#';

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {children.map((tab) => (
            <li key={tab.props.label} className={tab.props.label === activeTab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
              <a href={url} onClick={(evt) => tabHandle(evt, tab.props.label)} className="film-nav__link">{TabsLabels[tab.props.label]}</a>
            </li>
          ))}
          {/*<li className="film-nav__item film-nav__item--active">
            <a href={url} className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href={url} className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href={url} className="film-nav__link">Reviews</a>
          </li>*/}
        </ul>
      </nav>
      {children.map((one) => {
        if (one.props.label === activeTab) {
          return (
            <div key={one.props.label}>
              {one.props.children}
            </div>
          );
        }
      })}
    </div>

  );
}

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
