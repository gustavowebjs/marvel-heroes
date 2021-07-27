import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HeaderList, Thumbnail, Card, ContentCard } from './styles';

interface CharacterProps {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

interface Props {
  name?: string;
  character: CharacterProps;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const history = useHistory();

  return (
    <Card onClick={() => history.push(`/heroes/${character.id}`)}>
      <ContentCard>
        <Thumbnail
          style={{
            backgroundImage: `url(${character.thumbnail?.path}.${character.thumbnail?.extension})`,
          }}
        />
        <Link to={`/heroes/${character.id}`}>
          <HeaderList>{character.name}</HeaderList>
        </Link>
      </ContentCard>
    </Card>
  );
};

export default CharacterCard;
