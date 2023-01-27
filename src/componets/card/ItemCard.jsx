"use client";
import React from "react";
import styled from "styled-components";

export default function ItemCard(props) {
  return <Root>{props.children}</Root>;
}

const Root = styled.div`
  width: 200px;
  box-shadow: #eeeeee 0px 5px 0px;
  margin: 25px 0px;
  border-radius: 20px;
  font-weight: 600;
  overflow: hidden;
  transition: transform 200ms;
  border: 1px solid #eeeeee;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
