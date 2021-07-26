import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import { Button } from '../../components/common/button';
import Loading from '../../components/common/loading';
import FeaturedSeries from '../../components/Heroes/FeaturedSeries';
import api from '../../services/api';
import { CharacterProps, SeriesProp, ComicsProp } from '../../types';
import {
  Container,
  WrapperImage,
  ImageSingle,
  TitleSingle,
  Center,
  SingPageRow,
  WrapperDetails,
  GroupButton,
  ButtonTab,
} from './styles';
import FeaturedComics from '../../components/Heroes/FeaturedComics';

interface RouteParams {
  id: string;
}

type RouteParamsProp = RouteComponentProps<RouteParams>;

const HeroSingle: React.FC<RouteParamsProp> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tabView, setTabView] = useState<string>('series');
  const [comics, setComics] = useState<ComicsProp[]>([]);
  const [series, setSeries] = useState<SeriesProp[]>([]);

  const [character, setCharacter] = useState<CharacterProps>({
    id: 0,
    name: '',
    description: '',
    thumbnail: {
      extension: '',
      path: '',
    },
  });

  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;

  // fetch data function
  useEffect(() => {
    async function fetchSingleCharacter(): Promise<void> {
      try {
        setLoading(true);
        const { data } = await api.get(`/characters/${id}`);
        const { data: seriesData } = await api.get(`/characters/${id}/series`, {
          params: { limit: 5 },
        });
        const { data: comicsData } = await api.get(`/characters/${id}/comics`, {
          params: { limit: 5 },
        });

        setCharacter(data.data.results[0]);
        setSeries(seriesData.data.results);
        setComics(comicsData.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSingleCharacter();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Center>
          <Loading />
        </Center>
      ) : (
        <SingPageRow>
          <WrapperImage>
            <ImageSingle
              style={{
                backgroundImage: `url(${character.thumbnail?.path}.${character.thumbnail?.extension})`,
              }}
            />
            <TitleSingle>{character.name}</TitleSingle>
            <br /> <br />
            <Center>
              <Link to="/">
                <Button>
                  <KeyboardReturnOutlinedIcon />
                  Return
                </Button>
              </Link>
            </Center>
          </WrapperImage>

          <WrapperDetails>
            <GroupButton>
              <ButtonTab onClick={() => setTabView('series')}>Series</ButtonTab>
              <ButtonTab onClick={() => setTabView('comics')}>Comics</ButtonTab>
            </GroupButton>

            {tabView === 'series' ? (
              <FeaturedSeries character={character.name} series={series} />
            ) : (
              <FeaturedComics character={character.name} comics={comics} />
            )}
          </WrapperDetails>
        </SingPageRow>
      )}
    </Container>
  );
};

export default HeroSingle;
