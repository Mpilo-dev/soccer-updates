import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const Text = styled.span`
  font-size: 10px;
  font-weight: bolder;
`;

const LogoWithName = ({ img, text }) => {
  return (
    <Container>
      <Image src={img} />
      <Text>{text}</Text>
    </Container>
  );
};

export default LogoWithName;
