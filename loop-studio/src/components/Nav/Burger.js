import React, { useState } from 'react';
import Styled from 'styled-components';
import MobileNav from './MobileNav';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1>loopstudio</h1>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileNav open={open} />
    </>
  );
};

const StyledBurger = Styled.div`
width:2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    z-index: 20;
    display: none;
    @media (max-width: 768px){
        display: flex;
    }
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: #fff;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(48deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-48deg)' : 'rotate(0)')};
    }
  }
`;

export default Burger;
