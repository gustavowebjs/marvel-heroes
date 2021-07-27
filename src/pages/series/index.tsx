import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import { Button } from '../../components/common/button';
import Loading from '../../components/common/loading';
import SerieCard from '../../components/Series/SerieCard';
import api from '../../services/api';
import { Container, CardList, Center, Form, Total } from './styles';
import Input from '../../components/common/input/Input';
import { SeriesProp } from '../../types';

const Series: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [series, setSeries] = useState<SeriesProp[]>([]);

  // search by name input
  const [search, setSearch] = useState<string>('');

  const [params, setParams] = useState<ParamsProps>({
    titleStartsWith: undefined,
    limit: 24,
    offset: 0,
  });

  type ParamsProps = {
    titleStartsWith: undefined | string;
    limit: number;
    offset: number;
  };

  async function handleMore(): Promise<void> {
    try {
      setLoadMore(true);
      const { data } = await api.get('/series', {
        params: { ...params, offset: series.length },
      });

      setSeries([...series, ...data.data.results]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadMore(false);
    }
  }

  const getSeries = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/series', {
        params,
      });

      setSeries(data.data.results);
      setTotal(data.data.total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    getSeries();
  }, [getSeries]);

  function handleFilter(e: FormEvent): void {
    e.preventDefault();
    if (search === '') {
      setParams({ ...params, titleStartsWith: undefined });
    } else {
      setParams({ ...params, titleStartsWith: search });
    }
  }

  return (
    <Container>
      <Form onSubmit={handleFilter}>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search from Series"
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
            {series.map((serie) => (
              <SerieCard key={serie.id} serie={serie} />
            ))}
          </CardList>

          {total > series.length && (
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

export default Series;
