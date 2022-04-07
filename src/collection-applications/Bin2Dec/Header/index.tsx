import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  NavBar,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <h1>Bin To Decimal</h1>
    <NavBar>
      <Link to="/">
        <p>Home</p>
      </Link>
    </NavBar>
  </Container>
);

export default Header;
