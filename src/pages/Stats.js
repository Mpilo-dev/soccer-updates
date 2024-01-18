import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 10px; */
  align-items: center;
`;
const Icon = styled.i`
  color: lightgray;
  font-size: 10px;
  /* margin-top: -5px; */
`;

const TextOne = styled.span`
  font-size: 10px;
  color: red;
  /* margin-bottom: px; */
`;
const TextTwo = styled.span`
  font-size: 10px;
  color: lightgray;
  /* margin-bottom: px; */
`;
const TextThree = styled.span`
  font-size: 10px;
  color: blue;
  /* margin-bottom: px; */
`;

const Stats = ({ textOne, textTwo, textThree, icon }) => {
  return (
    <Container>
      <StatsContainer>
        <TextOne>{textOne}</TextOne>
        <TextTwo>{textTwo}</TextTwo>
        <TextThree>{textThree}</TextThree>
      </StatsContainer>
      <Icon>{icon}</Icon>
    </Container>
  );
};

export default Stats;
