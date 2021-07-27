import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import FeaturedSeries from '../../components/Heroes/FeaturedSeries';

describe('FeaturedSeries component', () => {
  it('FeaturedSeries renders correctly', () => {
    render(
      <StaticRouter location="someLocation">
        <FeaturedSeries
          character="Spider-Man"
          series={[
            {
              id: 1,
              title: 'Spider-Man Serie',
              thumbnail: {
                extension: 'png',
                path: 'image',
              },
            },
          ]}
        />
      </StaticRouter>
    );

    expect(screen.getByText('Spider-Man Serie')).toBeInTheDocument();
  });
});
