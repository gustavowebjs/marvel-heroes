import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loading from '../../components/common/loading';
import api from '../../services/api';
import { CharacterProps, SeriesProp } from '../../types';
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
import FeaturedCharacters from '../../components/Series/FeaturedCharacters';

interface RouteParams {
  id: string;
}

type RouteParamsProp = RouteComponentProps<RouteParams>;

const SerieSingle: React.FC<RouteParamsProp> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tabView, setTabView] = useState<string>('characters');
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  const [serie, setSerie] = useState<SeriesProp>({
    id: 0,
    title: '',
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
        const { data } = await api.get(`/series/${id}`);
        const { data: charactersData } = await api.get(
          `/series/${id}/characters`,
          {
            params: { limit: 5 },
          }
        );

        setCharacters(charactersData.data.results);
        setSerie(data.data.results[0]);
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
                backgroundImage: `url(${serie.thumbnail?.path}.${serie.thumbnail?.extension})`,
              }}
            />
            <TitleSingle>{serie.title}</TitleSingle>
          </WrapperImage>

          <WrapperDetails>
            <GroupButton>
              <ButtonTab onClick={() => setTabView('characters')}>
                Characters
              </ButtonTab>
            </GroupButton>

            {tabView === 'characters' && (
              <FeaturedCharacters serie={serie.title} characters={characters} />
            )}
          </WrapperDetails>
        </SingPageRow>
      )}
    </Container>
  );
};

export default SerieSingle;
