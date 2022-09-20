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
      <Image>
        <img src={img1} alt="img1" />
        <p>
          DEEP
          <br /> EARTH
        </p>
      </Image>
      <Image>
        <img src={img2} alt="img1" />
        <p>NIGHT ARCADE</p>
      </Image>
      <Image>
        <img src={img3} alt="img1" />
        <p>SOCCER TEAM VR</p>
      </Image>
      <Image>
        <img src={img4} alt="img1" />
        <p>
          THE <br />
          GRID
        </p>
      </Image>
      <Image>
        <img src={img5} alt="img1" />
        <p>FROM UP ABOVE</p>
      </Image>
      <Image>
        <img src={img6} alt="img1" />
        <p>POCKET BOREALIS</p>
      </Image>
      <Image>
        <img src={img7} alt="img1" />
        <p>THE CURIOSITY</p>
      </Image>
      <Image>
        <img src={img8} alt="img1" />
        <p>MAKE IT FISHEYE</p>
      </Image>
    </Layout>
  );
};

const Layout = Styled.div`
min-height: 100vh;
display: grid;
place-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
position: relative;
`;

const Image = Styled.div`
object-fit: none;
position: relative;
p{
    color: white;
    position: absolute;
    top: 394px;
    width: 65%;
    font-size: 1.80rem;
  }
`;

export default Grid;
