import React from 'react';
import { SeriesProp } from '../../types';

type Props = {
  series: SeriesProp[];
  character: string;
};

const FeaturedSeries: React.FC<Props> = ({ series, character }) => {
  return (
    <>
      <h4>Featured Series:</h4>
      <p>The follow series are the featured Series from {character}</p>
      <ul>
        {series.map((serie: SeriesProp) => (
          <li key={serie.id}>
            <img
              width="80"
              alt={serie.title}
              src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            />
            {serie.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeaturedSeries;
