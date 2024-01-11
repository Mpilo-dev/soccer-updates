import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Icon = styled.i`
  color: black;
  font-size: 20px;
`;

const Text = styled.span`
  font-size: 10px;
`;

const IconWithText = ({ icon, text }) => {
  return (
    <IconContainer>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </IconContainer>
  );
};

export default IconWithText;
