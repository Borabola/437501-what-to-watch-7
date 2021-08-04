import React from 'react';
import {render, screen} from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should display LoadingScreen', () => {
    render(<LoadingScreen/>);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
