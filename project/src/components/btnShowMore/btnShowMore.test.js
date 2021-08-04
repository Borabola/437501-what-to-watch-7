import React from 'react';
import {render, screen} from '@testing-library/react';
import BtnShowMore from './btnShowMore';

describe('Component: MoreButton', () => {

  it('should display MoreButton', () => {

    render(<BtnShowMore onClickButton={()=>{}}/>);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
