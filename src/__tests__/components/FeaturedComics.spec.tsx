import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import FeaturedComics from '../../components/Heroes/FeaturedComics';

describe('FeaturedComics component', () => {
  it('FeaturedComics renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <FeaturedComics
          character="Spider-Man"
          comics={[
            {
              id: 1,
              title: 'Spider-Man Comic',
              thumbnail: {
                extension: 'png',
                path: 'image',
              },
            },
          ]}
        />
      </StaticRouter>
    );

    expect(screen.getByText('Spider-Man Comic')).toBeInTheDocument();
  });
});
