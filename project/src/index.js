import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const filmList = [
  {
    id: '1',
    imgName: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: '2',
    imgName: 'bohemian-rhapsody.jpg',
    filmTitle: 'Bohemian Rhapsody',
  },
  {
    id: '3',
    imgName: 'macbeth.jpg',
    filmTitle: 'Macbeth',
  },
  {
    id: '4',
    imgName: 'aviator.jpg',
    filmTitle: 'Aviator',
  },
  {
    id: '5',
    imgName: 'we-need-to-talk-about-kevin.jpg',
    filmTitle: 'We need to talk about Kevin',
  },
  {
    id: '6',
    imgName: 'what-we-do-in-the-shadows.jpg',
    filmTitle: 'What We Do in the Shadows',
  },
  {
    id: '7',
    imgName: 'revenant.jpg',
    filmTitle: 'Revenant',
  },
  {
    id: '8',
    imgName: 'johnny-english.jpg',
    filmTitle: 'Johnny English',
  },
  {
    id: '9',
    imgName: 'shutter-island.jpg',
    filmTitle: 'Shutter Island',
  },
  {
    id: '10',
    imgName: 'pulp-fiction.jpg',
    filmTitle: 'Pulp Fiction',
  },
  {
    id: '11',
    imgName: 'no-country-for-old-men.jpg',
    filmTitle: 'No Country for Old Men',
  },
  {
    id: '12',
    imgName: 'snatch.jpg',
    filmTitle: 'Snatch',
  },
  {
    id: '13',
    imgName: 'moonrise-kingdom.jpg',
    filmTitle: 'Moonrise Kingdom',
  },
  {
    id: '14',
    imgName: 'seven-years-in-tibet.jpg',
    filmTitle: 'Seven Years in Tibet',
  },
  {
    id: '15',
    imgName: 'midnight-special.jpg',
    filmTitle: 'Midnight Special',
  },
  {
    id: '16',
    imgName: 'war-of-the-worlds.jpg',
    filmTitle: 'War of the Worlds',
  },
  {
    id: '17',
    imgName: 'dardjeeling-limited.jpg',
    filmTitle: 'Dardjeeling Limited',
  },
  {
    id: '18',
    imgName: 'orlando.jpg',
    filmTitle: 'Orlando',
  },
  {
    id: '19',
    imgName: 'mindhunter.jpg',
    filmTitle: 'Mindhunter',
  },
  {
    id: '20',
    imgName: 'midnight-special.jpg',
    filmTitle: 'Midnight Special',
  },

];


ReactDOM.render(
  <React.StrictMode>
    <App filmList={filmList} genre={'Drama'} releaseDate={'2014'} title={'The Grand Budapest Hotel'} />
  </React.StrictMode>,
  document.getElementById('root'));
