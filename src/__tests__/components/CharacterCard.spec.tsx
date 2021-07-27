import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import CharacterCard from '../../components/Heroes/CharacterCard';

describe('Character Card component', () => {
  it('CardDetails renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <CharacterCard
          character={{
            id: 1,
            name: 'Spider-Man',
            thumbnail: {
              extension: 'png',
              path: 'image',
            },
          }}
        />
      </StaticRouter>
    );

    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
  });
});
