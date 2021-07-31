import React, { useState } from 'react';
import OverviewTab from '../../components/tabs/overview';
import ReviewsTab from '../../components/tabs/reviews';
import DetailsTab from '../../components/tabs/details';
import {TabLabels} from '../../const';
import {filmPropDefault} from '../../components/film-list/film-list.prop';
import {reviewListProp} from '../tabs/review.prop';

const TabNames = [
  { key: TabLabels.OVERVIEW,
    name: 'Overview',
  },
  { key: TabLabels.DETAILS,
    name: 'Details',
  },
  { key: TabLabels.REVIEWS,
    name: 'Reviews',
  },
];

function Tabs({currentFilm, comments}) {
  const [activeTab, setActiveTab]= useState(TabLabels.OVERVIEW);
  let tabContent = '';

  if (activeTab === TabLabels.OVERVIEW) {
    tabContent =  <OverviewTab currentFilm={currentFilm} />;
  }
  if (activeTab === TabLabels.DETAILS) {
    tabContent = <DetailsTab label="tab2" currentFilm={currentFilm} />;
  }
  if (activeTab === TabLabels.REVIEWS) {
    tabContent = <ReviewsTab label="tab3" comments={comments}/>;
  }

  const handleTabClick = (evt, newActiveTab) => {
    evt.preventDefault();
    if (newActiveTab !== activeTab ) {
      setActiveTab(newActiveTab);
    }
  };

  const url = '#';

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TabNames.map(({key, name}) => (
            <li key={key} className={key === activeTab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
              <a href={url} onClick={(evt) => handleTabClick(evt, key)} className="film-nav__link">{name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {tabContent}
    </div>

  );
}

Tabs.defaultProps = {
  currentFilm: null,
  comments: null,
};

Tabs.propTypes = {
  currentFilm: filmPropDefault,
  comments: reviewListProp,
};

export default Tabs;
