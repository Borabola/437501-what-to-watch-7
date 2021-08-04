import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmCard from './film-card';
import {film} from '../../test-mock/test-mock';


describe('Component: Film Card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmCard film={film}  isPlaying={false} onCardHover={()=>jest.fn()} onCardLeave={()=>jest.fn()}/>
      </Router>,
    );

    const filmName = getByText('The Grand Budapest Hotel');

    expect(filmName).toBeInTheDocument();
  });
});
