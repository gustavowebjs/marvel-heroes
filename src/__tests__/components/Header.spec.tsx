import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header component', () => {
  it('Header component render correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <Header />
      </StaticRouter>
    );

    expect(screen.getByText('Your Heroes catalogue')).toBeInTheDocument();
    expect(screen.getByText('Heroes')).toBeInTheDocument();
    expect(screen.getByText('Series')).toBeInTheDocument();
  });
});
