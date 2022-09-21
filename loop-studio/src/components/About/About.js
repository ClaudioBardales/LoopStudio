import React from 'react';
import Styled from 'styled-components';
import aboutimg from '../../img/desktop/image-interactive.jpg';

const About = () => {
  return (
    <Container>
      <Wrapper>
        <ContentImg src={aboutimg} alt="img" />
        <Content>
          <h1>
            THE LEADER IN <br />
            INTERACTIVE VR
          </h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = Styled.div`
display: grid;
place-items: center;
width: 100%;
`;

const Content = Styled.div`
width: 63%;
padding: 3rem;
background-color: white;
grid-column: 2 / span 3;
grid-row: 3 / span 3;
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
@media (max-width: 768px){
  grid-column: auto;
  grid-row: auto;
  width: 100%;
  h1{
    font-size: 40px;
  }
  p{
    text-indent: 10px;
  }

}

`;

const ContentImg = Styled.img`
grid-column: 1 / span 2;
grid-row: 2 / span 2;
@media (max-width: 768px){
  width: 80%;
  grid-column: auto;
  grid-row: auto;

`;

export default About;
