import React, { useState } from 'react';
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
        </ul>
      </nav>

      {children.map((child) => {
        if (child.props.label === activeTab) {
          React.cloneElement(child, {
            key: child.props.label,
          });
        }
      })}

    </div>

  );
}

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
