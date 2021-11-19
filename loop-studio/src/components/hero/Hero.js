import React from 'react';
import Styled from 'styled-components';
import Navbar from '../Nav/Navbar';
import HeroImg from '../../img/desktop/image-hero.jpg';

const Hero = () => {
  return (
    <Img>
      <Navbar />
    </Img>
  );
};

const Img = Styled.div`
background-image: url(${HeroImg});
background-repeat: no-repeat;
background-size: cover;
min-height: 75vh;
`;

export default Hero;
