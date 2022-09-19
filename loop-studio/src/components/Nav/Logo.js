import React from 'react';
import Styled from 'styled-components';

const Logo = () => {
  return (
    <LogoContainer>
      <h1>loopstudios</h1>
    </LogoContainer>
  );
};

const LogoContainer = Styled.div`
width: 15.2%;
h1{
  color: white;
}
@media (max-width: 768px){
 width: 50.2%;
}

`;

export default Logo;
