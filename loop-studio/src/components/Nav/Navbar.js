import React from 'react';
import Styled from 'styled-components';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Items>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </Items>
    </Nav>
  );
};

const Nav = Styled.div`
min-height: 15vh;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Items = Styled.div`
width: 25%;
display: flex;
flex-direction: row;
justify-content: space-between;
li{
 list-style-type: none;
 color: white;
}

`;

export default Navbar;
