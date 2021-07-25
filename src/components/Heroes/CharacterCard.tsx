import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderList, Thumbnail, Card } from './styles';

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
  return (
    <Card>
      <Thumbnail
        src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
        alt={character.name}
      />
      <Link to={`/heroes/${character.id}`}>
        <HeaderList>{character.name}</HeaderList>
      </Link>
    </Card>
  );
};

export default CharacterCard;
