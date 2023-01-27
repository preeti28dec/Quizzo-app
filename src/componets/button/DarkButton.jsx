"use client";
import React from "react";
import styled from "styled-components";
export default function DarkButton(props) {
  return (
    <Root>
      <div className="getButton">{props.title}</div>
    </Root>
  );
}
const Root = styled.div`
  .getButton {
    min-width: 150px;
    width: 90%;
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    border-radius: 50px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
    padding: 6px;
    transition: transform 200ms;
  }
  .getButton:hover {
    transform: scale(1.05);
  }
`;
