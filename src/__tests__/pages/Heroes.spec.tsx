import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Home from '../../pages/heroes';

describe('Heroes page', () => {
  it('Heroes page should render correctly', () => {
    render(
      <StaticRouter location="/heroes">
        <Home />
      </StaticRouter>
    );

    expect(
      screen.getByPlaceholderText('Search for characters')
    ).toBeInTheDocument();
  });
});
