import React from 'react';
import Styled from 'styled-components';

const Button = () => {
  return (
    <Btn>
      <p>SEE ALL</p>
    </Btn>
  );
};

const Btn = Styled.div`
border: 1px solid black;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0 7px 0;
background-color: white;
cursor: pointer;
p{
  font-size: 12.5px;
  color: black;

}
&:hover{
  background-color: black;
  transition: all .4s ease;
  p{
    color: white;
    transition: all .4s ease;

  }
}


`;

export default Button;
