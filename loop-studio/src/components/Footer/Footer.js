import React from 'react';
import Styled from 'styled-components';
import Facebook from '../../img/icon-facebook.svg';
import Instagram from '../../img/icon-instagram.svg';
import Pinterest from '../../img/icon-pinterest.svg';
import Twitter from '../../img/icon-twitter.svg';

const Footer = () => {
  return (
    <Container>
      <First>
        <h1>loopstudios</h1>
        <div>
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Pinterest} alt="pinterest" />
          <img src={Twitter} alt="twitter" />
        </div>
      </First>
      <Second>
        <Links>
          <p>About</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Products</p>
          <p>Support</p>
        </Links>
        <div>
          <p>&copy;2021 Loopstudios. All rights reserved</p>
        </div>
      </Second>
    </Container>
  );
};

const Container = Styled.div`
min-height: 10vh;
background-color: black;
`;

const First = Styled.div`
width: 90%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
h1{
  color: white;
}
div{
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 20%;
}
`;

const Second = Styled.div`
width: 90%;
margin: 0 auto;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Links = Styled.div`
display: flex;
border: 1px solid green;
width: 30%;
`;

export default Footer;
