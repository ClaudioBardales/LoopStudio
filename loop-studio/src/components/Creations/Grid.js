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
      <img src={img1} alt="image1" />
      <img src={img2} alt="image2" />
      <img src={img3} alt="image3" />
      <img src={img4} alt="image4" />
      <img src={img5} alt="image5" />
      <img src={img6} alt="image6" />
      <img src={img7} alt="image7" />
      <img src={img8} alt="image8" />
    </Layout>
  );
};

const Layout = Styled.div`
margin: auto;
padding-top: 2rem;
width: 85%;
display: grid;
place-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 1rem;


`;

export default Grid;
