"use client";
import React from "react";
import styled from "styled-components";
export default function BlueButton(props) {
  return <Root>{props.children}</Root>;
}
const Root = styled.div`
  background-color: var(--blueColor);
  box-shadow: #543acc 0px 5px 0px;
  margin: 25px 20px;
  border-radius: 50px;
  padding: 15px 12px;
  color: var(--whiteColor);
  text-align: center;
  font-weight: 600;
  transition: transform 200ms;
  :hover {
    transform: scale(1.05);
  }
`;
