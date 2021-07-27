import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Series from '../../pages/series';

describe('Series page', () => {
  it('Series page should render correctly ', () => {
    render(
      <StaticRouter location="/series">
        <Series />
      </StaticRouter>
    );

    expect(
      screen.getByPlaceholderText('Search for Series')
    ).toBeInTheDocument();
  });
});
