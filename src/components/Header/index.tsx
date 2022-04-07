import React from 'react';
import {
  Container,
} from './styles';
import Menu from './Menu';
import Language from './Language';

function Header() {
  return (
    <Container>
      <Menu />
      <h1>Logo</h1>
      <Language />
    </Container>
  );
}

export default Header;
