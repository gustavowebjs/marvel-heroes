import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Container, LinkHub, Text } from './styles';
import Logo from '../../assets/img/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Marvel Logo" width="100" />
      <Text>
        Copyright ©2021 All rights reserved | This website was developed by
        <LinkHub target="_blank" href="https://github.com/gustavowebjs">
          <GitHubIcon /> Gustavo Vinicius
        </LinkHub>
      </Text>
    </Container>
  );
};

export default Footer;
