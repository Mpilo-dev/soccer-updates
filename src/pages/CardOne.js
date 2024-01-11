import * as React from "react";
import styled from "styled-components";

import { PiSoccerBallFill } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import TeamCard from "./TeamCard";
import IconWithText from "./IconWithText";

const CardOne = () => {
  return (
    <>
      <Body>
        <MainContainer>
          <ContentContainer>
            <Heading>match #11</Heading>
            <Text>Friday 12 Jan 24 at 18:00</Text>

            <ScoreContainer>
              <TeamCard text={"team 1"} />
              <Score>3 - 1</Score>
              <TeamCard text={"team 2"} />
            </ScoreContainer>
          </ContentContainer>

          <LogContainer>
            <IconWithText icon={<PiSoccerBallFill />} text="Match Day" />
            <IconWithText icon={<IoStatsChart />} text="Your Stats" />
            <IconWithText icon={<BsStack />} text="Standings" />
            <IconWithText icon={<TbShoe />} text="Account" />
          </LogContainer>
        </MainContainer>
      </Body>
    </>
  );
};

const Body = styled.div`
  width: 400px;
  height: 350px;
  margin: 150px auto;
  background: navy;
`;

const MainContainer = styled.div`
  width: 300px;
  height: 250px;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  margin: 150px auto;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  font-family: Roboto;

  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const ContentContainer = styled.div`
  width: 100%;
  /* height: 60%; */
  background: green;

  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 15px;
  box-sizing: border-box;

  border-radius: 10px;
  box-shadow: 0 5px darkgreen;

  /* gap: 20px; */
`;

const Heading = styled.h1`
  font-size: 20px;
  color: white;
  text-transform: capitalize;
  margin-top: -5px;
`;

const Text = styled.p`
  color: lightgray;
  font-size: 12px;
  margin-top: -5px;
`;

const Score = styled.span`
  /* height: 20px; */
  /* width: 50px; */
  color: white;
  text-align: center;
  font-weight: bold;

  place-self: center;
`;

const ScoreContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

const LogContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: -25px;
`;

export default CardOne;
