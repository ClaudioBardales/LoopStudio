import React from 'react';
import Styled from 'styled-components';
import Logo from './Logo';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Burger />
    </Nav>
  );
};

const Nav = Styled.div`
min-height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
`;

export default Navbar;
