import React, { useEffect } from 'react';
import { useState } from 'react';
import Styled from 'styled-components';
import MobileGrid from './MobileGrid';
import Grid from './Grid';

const Projects = () => {
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 500;

  const handleClick = () => {
    setShow(!show);
  };

  let grid;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  if (width > breakpoint) {
    grid = <Grid />;
  } else {
    grid = <MobileGrid />;
  }

  return (
    <Container>
      <Wrapper>
        <h1>OUR CREATIONS</h1>
        <Button onClick={handleClick}>{show ? 'HIDE ALL' : 'SHOW ALL'}</Button>
      </Wrapper>
      {show ? grid : null}
    </Container>
  );
};

const Button = Styled.button`
border: 1px solid black;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0 7px 0;
background-color: white;
cursor: pointer;
font-size: 12.5px;
color: black;
&:hover{
  background-color: black;
  transition: all .4s ease;
  color: white;
  transition: all .4s ease;
}

`;

const Container = Styled.div`
min-height: 100vh;
`;

const Wrapper = Styled.div`
margin: auto;
padding-bottom: 15px;
width: 93.2%;
display: flex;
justify-content: space-between;
h1{
  font-weight: lighter;
}
`;

export default Projects;
