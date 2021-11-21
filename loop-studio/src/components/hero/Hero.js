import React from 'react';
import Styled from 'styled-components';
import Navbar from '../Nav/Navbar';
import HeroImg from '../../img/desktop/image-hero.jpg';

const Hero = () => {
  return (
    <Img>
      <Navbar />
      <Wrapper>
        <Styledh1>
          <p>
            IMMERSIVE <br />
            EXPERIENCES <br />
            THAT DELIVER
          </p>
        </Styledh1>
      </Wrapper>
    </Img>
  );
};

const Img = Styled.div`
background-image: url(${HeroImg});
background-repeat: no-repeat;
background-size: cover;
min-height: 50vh;
`;

const Wrapper = Styled.div`
margin: auto;
width: 71%;
`;

const Styledh1 = Styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border: white 1px solid;
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
