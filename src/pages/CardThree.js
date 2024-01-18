import React from "react";
import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";

import LiverpoolLogo from "../images/Liverpool.svg.png";
import ArsenalLogo from "../images/arsenal.svg.png";
import BarcaLogo from "../images/barcelona.svg.png";
import PSGLogo from "../images/psg.svg.png";

import CardTitle from "./CardTitle";
import Friends from "./Friends";

import LogoWithName from "./LogoWithName";
import Stats from "./Stats";
import { RxCross1 } from "react-icons/rx";

const CardThree = () => {
  return (
    <Body>
      <MainContainer>
        <IconContainer>
          <IconBackground>
            <IoIosArrowBack />
          </IconBackground>
          <IoMdNotificationsOutline />
        </IconContainer>
        <Heading>Predict before Kick off</Heading>
        <ContentContainer>
          <FriendsContainer>
            <CardTitle text="UEFA Champions League" time="14:00 EST" />
            <Friends
              text="Invite friends"
              imgOne={LiverpoolLogo}
              imgTwo={ArsenalLogo}
              imgThree={BarcaLogo}
            />
          </FriendsContainer>
          <ButtonContainer>
            <Button>
              Bet &nbsp; <LiaGreaterThanSolid />
            </Button>
          </ButtonContainer>

          <FixtureContainer>
            <LogoWithName img={BarcaLogo} text="Barcelona" />
            <Stats
              textOne="60%"
              textTwo="23%"
              textThree="17%"
              icon={<RxCross1 />}
            />
            <LogoWithName img={PSGLogo} text="PSG" />
          </FixtureContainer>

          <StatsBar>
            <ColorRed />
            <ColorGray />
            <ColorBlue />
          </StatsBar>
          <StatsBar />
          <LikesContainer>
            <Text>Who will win</Text>
            <LikesIcon>
              <AiFillLike />
              <AiFillLike />
              <AiFillLike />
            </LikesIcon>
          </LikesContainer>
        </ContentContainer>

        <ContentContainer>
          <FriendsContainer>
            <CardTitle text="UEFA chapions league" time="14:00 ESP" />
            <Friends
              text="Invite friends"
              imgOne={LiverpoolLogo}
              imgTwo={ArsenalLogo}
              imgThree={BarcaLogo}
            />
          </FriendsContainer>
          <ButtonContainer>
            <Button>
              Bet &nbsp; <LiaGreaterThanSolid />
            </Button>
          </ButtonContainer>

          <FixtureContainer>
            <LogoWithName img={LiverpoolLogo} text="Liverpool" />
            <Stats
              textOne="60%"
              textTwo="23%"
              textThree="17%"
              icon={<RxCross1 />}
            />
            <LogoWithName img={ArsenalLogo} text="Arsenal" />
          </FixtureContainer>

          <StatsBar>
            <ColorRed />
            <ColorGray />
            <ColorBlue />
          </StatsBar>
          <LikesContainer>
            <Text>Who will win</Text>
            <AiFillLike />
            <AiFillLike />
            <AiFillLike />
          </LikesContainer>
        </ContentContainer>
      </MainContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 330px;
  height: 100vh;
  background: #cbc3e3;
  margin: 0 auto;
  font-family: Roboto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  width: 220px;
  height: 500px;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
`;

const FriendsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  width: 100%;
  font-size: 15px;
  /* height: 20px; */
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  font-size: 13px;
  margin-top: 25px;
  font-weight: bolder;
`;

const ContentContainer = styled.div`
  background: white;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
`;
const StatsBar = styled.div`
  width: 100%;
  height: 3px;
  // background: linear-gradient(to right, #3498db, #2ecc71, #e74c3c);
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;

  display: flex;
`;

const LikesContainer = styled.div`
  width: 90%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;

const LikesIcon = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  color: lightgray;
`;

const Text = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const FixtureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5px;
`;

const Button = styled.div`
  width: 35px;
  height: 10px;
  background: purple;
  border-radius: 15px;
  font-size: 10px;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: bolder;
`;

const IconBackground = styled.div`
  width: 25px;
  height: 25px;
  background-color: green;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorBlue = styled.div`
  width: 17%;
  height: 3px;
  background: blue;
`;
const ColorGray = styled.div`
  width: 23%;
  height: 3px;
  background: Gray;
`;
const ColorRed = styled.div`
  width: 60%;
  height: 3px;
  background: Red;
`;

export default CardThree;
