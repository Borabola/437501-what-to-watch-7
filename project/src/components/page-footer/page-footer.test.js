import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PageFooter from './page-footer';

describe('Component: PageFooter', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PageFooter />
      </Router>,
    );

    expect(screen.getByText(/2021 What to watch Ltd/i)).toBeInTheDocument();
    screen.getAllByText(/W/i).forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
