import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import FeaturedCharacters from '../../components/Series/FeaturedCharacters';

describe('FeaturedCharacters component', () => {
  it('FeaturedCharacters renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <FeaturedCharacters
          serie="Spider Serie"
          characters={[
            {
              id: 1,
              name: 'Spider-Man',
              description: '',
              thumbnail: {
                extension: 'png',
                path: 'image',
              },
            },
          ]}
        />
      </StaticRouter>
    );

    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
  });
});
