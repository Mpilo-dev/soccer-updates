import * as React from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import Timo from "../images/timo.webp";
import ImageStack from "./ImagesStack";

const CardFour = () => {
  return (
    <>
      <Container>
        <ProfileContainer>
          <Profile>
            <Icon>
              <IoMdArrowBack />
            </Icon>
            <Logs>
              <ImageStack />
            </Logs>
            <FullName>
              <Name>Timo</Name>
              <Surname>Werner</Surname>
            </FullName>
          </Profile>
          <Image src={Timo} />
        </ProfileContainer>
        <StatsBar>
          <StatsItems>
            <Number>24</Number>
            <Text>Games</Text>
          </StatsItems>
          <StatsItems>
            <Number>1800</Number>
            <Text>Minutes</Text>
          </StatsItems>
          <StatsItems>
            <Number>14</Number>
            <Text>Goals</Text>
          </StatsItems>
          <StatsItems>
            <Number>12</Number>
            <Text>Assists</Text>
          </StatsItems>
        </StatsBar>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 400px;
  height: 300px;
  padding: 30px;
  padding-top: 10px;
  background: rgba(0,0,0,0.5);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-sizing: border-box;

  margin: 100px auto;

  font-family: Roboto;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  height: 70%;
`;
const Profile = styled.div`
  /* background: red; */

  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
`;

const Icon = styled.i`
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Logs = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Name = styled.span`
  color: lightgrey;
  font-size: 20px;
  /* font-weight: bold; */
`;
const Surname = styled.span`
  color: White;
  font-size: 45px;
  font-weight: bolder;
`;

const Image = styled.img`
  width: 50%;
`;

const StatsBar = styled.div`
  /* width: 100%; */
  padding: 15px;
  background: rgba(0,0,0,0.6);;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: -5px;
`;

const StatsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Number = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bolder;
`;
const Text = styled.span`
  color: lightgrey;
  font-size: 14px;
`;

const FullName = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;
export default CardFour;
