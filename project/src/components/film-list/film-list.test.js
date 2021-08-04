import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmList from './film-list';
import {film} from '../../test-mock/test-mock';

const films = [film];

let fakeApp = null;
let history = null;

describe('Component: FilmList', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    fakeApp = (
      <Router history={history}>
        <FilmList films={films} filmsNumber={1}/>
      </Router>
    );
  });

  it('should display film list', () => {

    render(fakeApp);

    expect(screen.getByText(/The Grand Budapest Hotel/i)).toBeInTheDocument();
  });
});
