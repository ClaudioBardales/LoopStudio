import React from 'react';
import Styled from 'styled-components';
import img1 from './../../img/mobile/image-curiosity.jpg';
import img2 from './../../img/mobile/image-deep-earth.jpg';
import img3 from './../../img/mobile/image-fisheye.jpg';
import img4 from './../../img/mobile/image-from-above.jpg';
import img5 from './../../img/mobile/image-grid.jpg';
import img6 from './../../img/mobile/image-night-arcade.jpg';
import img7 from './../../img/mobile/image-pocket-borealis.jpg';
import img8 from './../../img/mobile/image-soccer-team.jpg';

const MobileGrid = () => {
  return (
    <MobileLayout>
      <Image>
        <Img src={img1} alt="img" />
        <p>DEEP EARTH</p>
      </Image>
      <Image>
        <Img src={img2} alt="img" />
        <p>NIGHT ARCADE</p>
      </Image>
      <Image>
        <Img src={img3} alt="img" />
        <p>SOCCER TEAM VR</p>
      </Image>
      <Image>
        <Img src={img4} alt="img" />
        <p>THE GRID</p>
      </Image>
      <Image>
        <Img src={img5} alt="img" />
        <p>FROM UP ABOVE</p>
      </Image>
      <Image>
        <Img src={img6} alt="img" />
        <p>POCKET BOREALIS</p>
      </Image>
      <Image>
        <Img src={img7} alt="img" />
        <p>THE CURIOSITY</p>
      </Image>
      <Image>
        <Img src={img8} alt="img" />
        <p>MAKE IT FISHEYE</p>
      </Image>
    </MobileLayout>
  );
};

const MobileLayout = Styled.div`
display: grid;
place-items: center;
max-width: 95%;
margin: 0 auto;

`;

const Image = Styled.div`
position: relative;
p{
    color: white;
    position: absolute;
    top: 148px;
    font-size: 1.80rem;
}

`;

const Img = Styled.img`
width: 100%;
object-fit: cover;
`;

export default MobileGrid;
