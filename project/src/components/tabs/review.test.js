import React from 'react';
import {render, screen} from '@testing-library/react';
import Review from './review';

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

describe('Component:Review', () => {

  it('should display Review', () => {

    render(<Review review={reviewData}/>);

    expect(screen.getByText(/Kate Muir/i)).toBeInTheDocument();
    expect(screen.getByText(/Discerning travellers and Wes Anderson fans will luxuriate./i)).toBeInTheDocument();
    expect(screen.getByText(/8.9/i)).toBeInTheDocument();
  });
});
