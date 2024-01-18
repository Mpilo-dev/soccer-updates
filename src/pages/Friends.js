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

const Image = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid white;
  border-radius: 100%;
`;

const Text = styled.span`
  font-size: 10px;
`;

const Friends = ({ text, imgOne, imgTwo, imgThree }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <ImageContainer>
        <Image src={imgOne} />
        <Image src={imgTwo} />
        <Image src={imgThree} />
      </ImageContainer>
    </Container>
  );
};

export default Friends;
