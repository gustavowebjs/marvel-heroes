import React from 'react';
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
      <a href="/">
        <HeaderList>{character.name}</HeaderList>
      </a>
    </Card>
  );
};

export default CharacterCard;
