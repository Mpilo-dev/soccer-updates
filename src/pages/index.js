import * as React from "react";
import styled from "styled-components";

import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";

import ImageStack from "./ImagesStack";

const IndexPage = () => {
  return (
    <>
      {/* <CardOne/> */}
      {/* <CardTwo /> */}
      {/* <CardThree/> */}
      <CardFour />
      {/* <ImageStack/> */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Cards</title>;
