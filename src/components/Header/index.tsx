import React from 'react';
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
          <a href="/">
            <li>Heroes</li>
          </a>
          <a href="/">
            <li>Bio</li>
          </a>
        </ul>
      </Wrapper>
    </Container>
  );
};

export default Header;
