import * as React from "react";
import styled from "styled-components";

import LogoWithName from "./LogoWithName";
import BetButton from "./BetButton";

import LiverpoolLogo from "../images/Liverpool.svg.png";
import ArsenalLogo from "../images/arsenal.svg.png";
import BarcaLogo from "../images/barcelona.svg.png";
import ChelseaLogo from "../images/chelsea.svg.png";
import ManCityLogo from "../images/manchester_city.svg.png";
import ManUtdLogo from "../images/manchester_united.svg.png";
import PSG from "../images/psg.svg.png";
import Wolves from "../images/wolves.svg.png";

const CardTwo = () => {
  return (
    <Body>
      <MainContainer>
        <HeadingContainer>
          <Heading>Todays Matches</Heading>
          <Text>view all</Text>
        </HeadingContainer>

        <FixtureTable>
          <FixtureContainer>
            <LogoWithName img={ArsenalLogo} text="Arsenal" />
            <BetButton text="2H30" />

            <LogoWithName img={ManUtdLogo} text="Man United" />
          </FixtureContainer>

          <FixtureContainer>
            <LogoWithName img={BarcaLogo} text="Barcelona" />
            <BetButton text="3H30" />
            <LogoWithName img={PSG} text="PSG" />
          </FixtureContainer>

          <FixtureContainer>
            <LogoWithName img={ManCityLogo} text="Man City" />
            <BetButton text="4H30" />
            <LogoWithName img={LiverpoolLogo} text="Liverpool" />
          </FixtureContainer>

          <FixtureContainer>
            <LogoWithName img={ChelseaLogo} text="Chelsea" />

            <BetButton text="5H30" />
            <LogoWithName img={Wolves} text="Wolves" />
          </FixtureContainer>
        </FixtureTable>

        <Bar />
      </MainContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 400px;
  height: 500px;
  margin: 150px auto;
  background: #879eb0;
  box-sizing: border-box;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const MainContainer = styled.div`
  width: 270px;
  height: 420px;
  background: white;
  padding: 20px;
  gap: 30px;
  margin: 50px auto;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 20px;
  color: black;
  text-transform: capitalize;
  font-weight: bolder;
`;

const Text = styled.span`
  color: lightgray;
  font-size: 12px;
  text-transform: capitalize;
`;

const FixtureTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  gap: 20px;
`;

const FixtureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;

const Bar = styled.div`
  width: 100px;
  height: 5px;
  background: #691883;

  border-radius: 5px;
  align-self: center;
`;

export default CardTwo;
