import React from 'react';
import iconMenu from '../../../assets/icons/icon-menu-white.svg';
import {
  Container,
} from './styles';

function Menu() {
  return (
    <Container>
      <img src={iconMenu} alt="menu" />
    </Container>
  );
}

export default Menu;
