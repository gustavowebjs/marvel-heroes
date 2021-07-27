import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { CharacterProps } from '../../types';

type Props = {
  characters: CharacterProps[];
  serie: string;
};

const FeaturedCharacters: React.FC<Props> = ({ characters, serie }) => {
  return (
    <>
      <h4>Featured Characters:</h4>
      <p>The follow characters are the featured Characters from {serie}</p>
      <ul>
        {characters.map((character: CharacterProps) => (
          <li key={character.id}>
            <img
              width="80"
              alt={character.name}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />

            <div>
              {character.name}
              <Link style={{ color: '#666' }} to={`/heroes/${character.id}`}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ExitToAppOutlinedIcon />
                  See more
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeaturedCharacters;
