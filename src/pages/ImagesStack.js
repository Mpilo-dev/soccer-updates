import * as React from "react";
import styled from "styled-components";

import chelsea from "../images/chelsea.svg.png";
import arsenal from "../images/arsenal.svg.png";
import liverpool from "../images/liverpool.svg.png";

const ImageStack = () => {
  return (
    <>
      <ImageContainer>
        <ImageOne src={chelsea} />
        <ImageTwo src={arsenal} />
        <ImageThree src={liverpool} />
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  /* width: 50%;
  height: 30%;
  background: red;

  margin: 150px auto; */
`;

const ImageOne = styled.img`
  top: 0px;
  left: 0px;
  z-index: 3;

  background: red;
  height: 30px;
  width: 30px;
  position: absolute;
  border-radius: 50%;
`;

const ImageTwo = styled.img`
  top: 0px;
  left: 20px;
  z-index: 2;

  background: red;
  height: 30px;
  width: 30px;
  position: absolute;
  border-radius: 50%;
`;

const ImageThree = styled.img`
  top: 0px;
  left: 40px;
  z-index: 1;

  background: red;
  height: 30px;
  width: 30px;
  position: absolute;
  border-radius: 50%;
`;
export default ImageStack;
