import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  text-align: start;
`;

const Text = styled.span`
  color: black;
  font-size: 10px;
  margin-bottom: 5px;
`;

const Time = styled.span`
  font-size: 8px;
`;

const CardTitle = ({ text, time }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Time>{time}</Time>
    </Container>
  );
};

export default CardTitle;
