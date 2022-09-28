import React from 'react';
import Styled from 'styled-components';
import Navbar from '../Nav/Navbar';
import HeroImg from '../../img/desktop/image-hero.jpg';
import MobileHeroImg from '../../img/mobile/image-hero.jpg';

const Hero = () => {
  return (
    <Img>
      <Navbar />
      <Wrapper>
        <Paragraph>
          <p>
            IMMERSIVE <br />
            EXPERIENCES <br />
            THAT DELIVER
          </p>
        </Paragraph>
      </Wrapper>
    </Img>
  );
};

const Img = Styled.div`
background-image: url(${HeroImg});
background-repeat: no-repeat;
background-size: cover;
min-height: 60vh;
@media (max-width: 500px){
  background-image: url(${MobileHeroImg});
  min-height: 80vh;
}
`;

const Wrapper = Styled.div`
margin: auto;
width: 72%;
@media (max-width: 500px){
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;

`;

const Paragraph = Styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border: white 2px solid;
width: 21.063rem;
height: 14rem;
padding: 1.125rem;
p{
  font-size: 2.625rem;
  color: white;
  font-weight: lighter;
}
`;

export default Hero;
