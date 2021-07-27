import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import SerieCard from '../../components/Series/SerieCard';

describe('Serie Card component', () => {
  it('Serie card render correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <SerieCard
          serie={{
            id: 1,
            title: 'Spider-Man 2008',
            thumbnail: {
              extension: 'png',
              path: 'image',
            },
          }}
        />
      </StaticRouter>
    );

    expect(screen.getByText('Spider-Man 2008')).toBeInTheDocument();
  });
});
