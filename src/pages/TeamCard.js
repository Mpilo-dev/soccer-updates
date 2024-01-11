import React from "react";
import styled from "styled-components";

const TeamCardContainer = styled.div`
  position: relative;
  background: purple;
  padding: 3px;
  /* height: 20px; 
   width: 40px; */

  border-radius: 5px;
  box-shadow: 0 2px black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Ribbon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 10px 0 0px 0;

  background: yellow;
`;

const Text = styled.span`
  font-size: 14px;
  text-transform: capitalize;
  font-weight: bold;
  color: white;
`;

const TeamCard = ({ text }) => {
  return (
    <TeamCardContainer>
      <Ribbon />
      <Text>{text}</Text>
    </TeamCardContainer>
  );
};

export default TeamCard;
