import React from "react";
import styled from "styled-components";

import { LiaGreaterThanSolid } from "react-icons/lia";

const Container = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 20px;
  background: purple;
  border-radius: 15px;
  font-size: 10px;
  color: white;

  display: flex;
  padding: 5px;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
`;
const Text = styled.span`
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
`;

const Icon = styled.i`
  font-weight: bolder;
  padding: 3px;
  /* text-align: center; */
  font-size: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const BetButton = ({ text }) => {
  return (
    <Container>
      <Button>
        Bet
        <Icon>
          <LiaGreaterThanSolid />
        </Icon>
      </Button>
      <Text>{text}</Text>
    </Container>
  );
};

export default BetButton;
