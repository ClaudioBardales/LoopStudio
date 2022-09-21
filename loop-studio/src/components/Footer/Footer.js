import React from 'react';
import Styled from 'styled-components';
import Facebook from '../../img/icon-facebook.svg';
import Instagram from '../../img/icon-instagram.svg';
import Pinterest from '../../img/icon-pinterest.svg';
import Twitter from '../../img/icon-twitter.svg';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <h1>loopstudios</h1>
          <Icons>
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Twitter} alt="twitter" />
          </Icons>
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
      </Wrapper>
    </Container>
  );
};

const Container = Styled.div`
min-height: 20vh;
background-color: black;
@media (max-width: 500px){
  min-height: 40vh;
}
`;

const First = Styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 15px;
h1{
  color: white;
  margin-bottom: 20px;
}
@media (max-width: 500px){
  flex-direction: column;
}
`;

const Icons = Styled.div`
width: 15%;
display:flex;
justify-content: space-between;
cursor: pointer;
@media (max-width: 500px){
  flex-direction: row;
  width: 40%;
}

`;

const Second = Styled.div`
width: 90%;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 500px){
  flex-direction: column;
  div{
    margin-top: 20px;
  }
}
`;

const Links = Styled.div`
display: flex;
width: 30%;
justify-content: space-between;
p{
  cursor: pointer;
}
@media (max-width: 500px){
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
`;

const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 40vh;
`;

export default Footer;
