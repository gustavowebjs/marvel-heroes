import React, { useEffect, useState } from 'react';
import { Button } from '../components/common/button';
import Loading from '../components/common/loading';
import Filter from '../components/filter/Filter';
import CharacterCard from '../components/Heroes/CharacterCard';
import api from '../services/api';
import { Container, CardList, Center } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [params, setParams] = useState({
    nameStartsWith: null,
    limit: 12,
    offset: '',
  });

  type CharacterProps = {
    id: number;
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    };
  };

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/characters', {
          params,
        });

        setCharacters(data.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, [params]);

  return (
    <Container>
      <Filter />

      {loading ? (
        <Center>
          <Loading />
        </Center>
      ) : (
        <CardList>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CardList>
      )}
    </Container>
  );
};

export default Home;
