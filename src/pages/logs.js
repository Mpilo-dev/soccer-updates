import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const ImageOne = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid white;
  border-radius: 100%;
`;
const ImageTwo = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid white;
  border-radius: 100%;
`;
const ImageThree = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid white;
  border-radius: 100%;
`;

const Text = styled.span`
  font-size: 10px;
`;

const Logs = ({ imgOne, imgTwo, imgThree }) => {
  return (

    <ImageContainer>
      <ImageOne src={imgOne} />
      <ImageTwo src={imgTwo} />
      <ImageThree src={imgThree} />
    </ImageContainer>
  );
};

export default Logs;
