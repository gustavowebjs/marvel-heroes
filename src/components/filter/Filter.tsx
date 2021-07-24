import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Button } from '../common/button';
import Input from '../common/input/Input';
import { Container } from './styles';

const Filter: React.FC = () => {
  return (
    <Container>
      <form>
        <Input placeholder="Search a character" />

        <Button>
          <SearchOutlinedIcon />
          Filtrar
        </Button>
      </form>
    </Container>
  );
};

export default Filter;
