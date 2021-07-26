import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loading from '../../components/common/loading';
import api from '../../services/api';
import {
  Container,
  WrapperImage,
  ImageSingle,
  TitleSingle,
  Center,
  SingPageRow,
  WrapperDetails,
} from './styles';

interface RouteParams {
  id: string;
}

type RouteParamsProp = RouteComponentProps<RouteParams>;

const HeroSingle: React.FC<RouteParamsProp> = (props) => {
  type CharacterProps = {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      extension: string;
      path: string;
    };
  };

  const [character, setCharacter] = useState<CharacterProps>({
    id: 0,
    name: '',
    description: '',
    thumbnail: {
      extension: '',
      path: '',
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;

  // fetch data function
  useEffect(() => {
    async function fetchSingleCharacter(): Promise<void> {
      try {
        setLoading(true);
        const { data } = await api.get(`/characters/${id}`);

        setCharacter(data.data.results[0]);
      } catch (error) {
        throw new Error(`Error:${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchSingleCharacter();
  }, [id]);

  useEffect(() => {
    console.log(character);
  }, [character]);

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
          </WrapperImage>

          <WrapperDetails>
            <p>Text details</p>
          </WrapperDetails>
        </SingPageRow>
      )}
    </Container>
  );
};

export default HeroSingle;
