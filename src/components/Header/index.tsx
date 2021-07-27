import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';
import Logo from '../../assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <img src={Logo} alt="Marvel Logo" />
          <p>Your Heroes catalogue</p>
        </div>
        <ul>
          <Link to="/">
            <li>Heroes</li>
          </Link>
          <Link to="/series">
            <li>Series</li>
          </Link>
        </ul>
      </Wrapper>
    </Container>
  );
};

export default Header;
