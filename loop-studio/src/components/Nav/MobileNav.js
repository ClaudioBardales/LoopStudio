import React from 'react';
import Styled from 'styled-components';

const MobileNav = ({ open }) => {
  return (
    <Items open={open}>
      <div>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </div>
    </Items>
  );
};

const Items = Styled.div`
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      div{
        display: flex;
        flex-direction: column;
        width: 90%;
        height: auto;
        gap: 20px;
        min-height: 33vh;
        justify-content: flex-end;
      }
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
 text-transform: uppercase; 
 font-size: 1.5rem;
 a{
   text-decoration: none;
   color: white;
 }
`;

export default MobileNav;
