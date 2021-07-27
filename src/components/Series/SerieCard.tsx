import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SeriesProp } from '../../types';
import { HeaderList, Thumbnail, Card, ContentCard } from './styles';

interface Props {
  name?: string;
  serie: SeriesProp;
}

const SerieCard: React.FC<Props> = ({ serie }) => {
  const history = useHistory();

  return (
    <Card onClick={() => history.push(`/series/${serie.id}`)}>
      <ContentCard>
        <Thumbnail
          style={{
            backgroundImage: `url(${serie.thumbnail?.path}.${serie.thumbnail?.extension})`,
          }}
        />
        <Link to={`/series/${serie.id}`}>
          <HeaderList>{serie.title}</HeaderList>
        </Link>
      </ContentCard>
    </Card>
  );
};

export default SerieCard;
