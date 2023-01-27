"use client";
import React from "react";

import styled from "styled-components";
export default function MainHeader(props) {
  return (
    <Root>
      {props.title}
    </Root>
  );
}

const Root = styled.div`
  padding: 20px 16px;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 10;
`;
