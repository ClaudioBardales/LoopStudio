import React from 'react';
import Styled from 'styled-components';
import img1 from './../../img/desktop/image-curiosity.jpg';
import img2 from './../../img/desktop/image-deep-earth.jpg';
import img3 from './../../img/desktop/image-fisheye.jpg';
import img4 from './../../img/desktop/image-from-above.jpg';
import img5 from './../../img/desktop/image-grid.jpg';
import img6 from './../../img/desktop/image-night-arcade.jpg';
import img7 from './../../img/desktop/image-pocket-borealis.jpg';
import img8 from './../../img/desktop/image-soccer-team.jpg';

const Grid = () => {
  return (
    <Layout>
      <ImageOne>
        <p>
          DEEP
          <br /> EARTH
        </p>
      </ImageOne>
      <ImageTwo>
        <p>NIGHT ARCADE</p>
      </ImageTwo>
      <ImageThree>
        <p>SOCCER TEAM VR</p>
      </ImageThree>
      <ImageFour>
        <p>THE GRID</p>
      </ImageFour>
      <ImageFive>
        <p>FROM UP ABOVE</p>
      </ImageFive>
      <ImageSix>
        <p>POCKET BOREALIS</p>
      </ImageSix>
      <ImageSeven>
        <p>THE CURIOSITY</p>
      </ImageSeven>
      <ImageEight>
        <p>MAKE IT FISHEYE</p>
      </ImageEight>
    </Layout>
  );
};

const Layout = Styled.div`
margin: auto;
width: 90%;
padding-top: 2rem;
display: grid;
place-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
@media (max-width: 768px){
  grid-template-columns: 1fr 1fr;
}
`;

const ImageOne = Styled.div`
 background-image: url(${img1});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
   color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
`;

const ImageTwo = Styled.div`
 background-image: url(${img2});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }

`;

const ImageThree = Styled.div`
 background-image: url(${img3});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
`;

const ImageFour = Styled.div`
 background-image: url(${img4});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
`;

const ImageFive = Styled.div`
 background-image: url(${img5});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
`;

const ImageSix = Styled.div`
 background-image: url(${img6});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
`;

const ImageSeven = Styled.div`
 background-image: url(${img7});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
`;

const ImageEight = Styled.div`
 background-image: url(${img8});
 background-repeat: no-repeat;
 min-height: 46vh;
 min-width: 26vh;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 p{
  color: white;
   width: 65%;
   display: flex;
   justify-content: flex-start;
   font-size: 1.80rem;
 }
 
`;

export default Grid;
