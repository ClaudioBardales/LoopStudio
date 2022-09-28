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
      div{
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: center; 
      li{
        list-style-type: none;
        font-size: 16px;
      a{
        text-decoration: none;
        color: white;
 }
}
      }
  @media (max-width: 500px){
      align-items: center;
      flex-direction: column;
      background-color: #000;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      min-height: 45vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      div{
        padding: 5px;
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 15px;
        min-height: 33vh;
        justify-content: flex-end;
        li{
        list-style-type: none;
        text-transform: uppercase; 
        font-size: 1.5rem;
        a{
        text-decoration: none;
        color: white;
 }
}
      }
 }
`;

export default MobileNav;
