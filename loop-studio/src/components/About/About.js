import React from 'react';
import Styled from 'styled-components';
import aboutimg from '../../img/desktop/image-interactive.jpg';

const About = () => {
  return (
    <Container>
      <ContentImg src={aboutimg} alt="img" />
      <Content>
        <h1>
          THE LEADER IN <br />
          INTERACTIVE VR
        </h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class <br />{' '}
          virtual reality projects for some of the best companies around the{' '}
          <br />
          globe. Our award-winning creations have transformed <br />
          businesses through digital experiences that bind to their brand.
        </p>
      </Content>
    </Container>
  );
};

const Container = Styled.div`
min-height: 100vh;
display: grid;
position: relative;
grid-template-columns: repeat(12, 1fr)
place-items: center;
`;

const ContentImg = Styled.div`
grid-column: 4/ -1;
grid-row: 1;
`;

const Content = Styled.div`
grid-row: 1;
grid-column: 1 / span 8;
width: 40%;
padding: 3rem;
background-color: teal;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    font-size: 55px;
    font-weight: 100;
    line-height: 90%;
    margin: 1.8rem;
}
p{
    line-height: 1.6;
}


`;

export default About;
