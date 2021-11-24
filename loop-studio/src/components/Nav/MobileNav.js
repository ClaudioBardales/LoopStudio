import React from 'react';
import Styled from 'styled-components';

const MobileNav = ({ open }) => {
  return (
    <Items open={open}>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Careers</a>
      </li>
      <li>
        <a>Events</a>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Support</a>
      </li>
    </Items>
  );
};

const Items = Styled.div`
      width: 40%;
      display: flex;
      justify-content: space-between;
  @media (max-width: 768px){
      align-items: center;
      flex-flow: column;
      background-color: #000;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      height: 60vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
}
li{
 list-style-type: none;
 color: white;
`;

export default MobileNav;
