import React from 'react';
import Styled from 'styled-components';
import Button from './Button';

const Projects = () => {
  return (
    <Container>
      <div>
        <h1>Our Creations</h1>
        <Button />
      </div>
    </Container>
  );
};

const Container = Styled.div`
min-height: 100vh;


`;

export default Projects;
