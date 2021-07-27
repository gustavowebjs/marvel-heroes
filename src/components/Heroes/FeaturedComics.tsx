import React from 'react';
import { ComicsProp } from '../../types';

type Props = {
  comics: ComicsProp[];
  character: string;
};

const FeaturedComics: React.FC<Props> = ({ comics, character }) => {
  return (
    <>
      <h4>Featured Comics:</h4>
      <p>The follow comics are the featured Comics from {character}</p>
      <ul>
        {comics.map((comic: ComicsProp) => (
          <li key={comic.id}>
            <img
              width="80"
              alt={comic.title}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
            {comic.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeaturedComics;
