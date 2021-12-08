import React from 'react';
import Styled from 'styled-components';
import Button from './Button';
import Grid from './Grid';

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Our Creations</h1>
        <Button />
      </Wrapper>
      <Grid />
    </Container>
  );
};

const Container = Styled.div`
min-height: 100vh;
`;

const Wrapper = Styled.div`
margin: auto;
width: 85%;
display: flex;
justify-content: space-between;
`;

export default Projects;
