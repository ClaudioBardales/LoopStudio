import React from 'react';
import Styled from 'styled-components';
import Button from './Button';
import Grid from './Grid';

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <h1>OUR CREATIONS</h1>
        <Button />
      </Wrapper>
      <Grid />
    </Container>
  );
};

const Container = Styled.div`
min-height: 130vh;
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
