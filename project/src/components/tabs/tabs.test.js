import React from 'react';
import {render} from '@testing-library/react';
import Tabs from './tabs';

const currentFilm = {
  id: '1',
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://some-link',
  previewVideoLink: 'https://some-link',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Andreson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};

const reviewData = {
  'id': 1,
  'user': {
    'id': 4,
    'name': 'Kate Muir',
  },
  'rating': 8.9,
  'comment': 'Discerning travellers and Wes Anderson fans will luxuriate.',
  'date': '2019-05-08T14:13:56.569Z',
};

describe('Component:Tabs', () => {

  it('should display active Tab', () => {

    const {container} = render(<Tabs currentFilm={currentFilm} review={reviewData}  />);
    const active = container.querySelector('.film-nav__item--active');

    expect(active).toBeInTheDocument();
  });
});
