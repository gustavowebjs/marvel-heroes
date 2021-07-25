import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import { Button } from '../../components/common/button';
import Loading from '../../components/common/loading';
import CharacterCard from '../../components/Heroes/CharacterCard';
import api from '../../services/api';
import { Container, CardList, Center, Form, Total } from './styles';
import Input from '../../components/common/input/Input';

const Home: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  // search by name input
  const [search, setSearch] = useState<string>('');

  const [params, setParams] = useState<ParamsProps>({
    nameStartsWith: undefined,
    limit: 24,
    offset: 0,
  });

  type ParamsProps = {
    nameStartsWith: undefined | string;
    limit: number;
    offset: number;
  };

  type CharacterProps = {
    id: number;
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    };
  };

  async function handleMore() {
    try {
      setLoadMore(true);
      const { data } = await api.get('/characters', {
        params: { ...params, offset: characters.length },
      });

      setCharacters([...characters, ...data.data.results]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadMore(false);
    }
  }

  const getCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/characters', {
        params,
      });

      setCharacters(data.data.results);
      setTotal(data.data.total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  function handleFilter(e: FormEvent): void {
    e.preventDefault();
    if (search === '') {
      setParams({ ...params, nameStartsWith: undefined });
    } else {
      setParams({ ...params, nameStartsWith: search });
    }
  }

  return (
    <Container>
      <Form onSubmit={handleFilter}>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search from characters"
        />

        <Button>
          <SearchOutlinedIcon />
          Search
        </Button>
      </Form>
      <Total>
        Found: <strong>{total}</strong> results
      </Total>

      {loading ? (
        <Center>
          <Loading />
        </Center>
      ) : (
        <>
          <CardList>
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </CardList>

          {total > characters.length && (
            <Center>
              <Button disabled={loadMore} onClick={handleMore}>
                <CachedOutlinedIcon />
                {loadMore ? 'Loading...' : 'Load More'}
              </Button>
            </Center>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
