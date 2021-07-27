import React from 'react';
import { Link } from 'react-router-dom';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
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
            <div>
              {serie.title}
              <div>
                <Link style={{ color: '#666' }} to={`/series/${serie.id}`}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ExitToAppOutlinedIcon />
                    See more
                  </div>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeaturedSeries;
