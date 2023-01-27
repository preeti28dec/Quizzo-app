"use client";
import React from "react";
import styled from "styled-components";
export default function LightButton(props) {
  return (
    <Root>
      <div className="haveAccountButton">{props.title}</div>
    </Root>
  );
}
const Root = styled.div`
  .haveAccountButton {
    min-width: 150px;
    width: 90%;
    background-color: var(--lightPurple);
    box-shadow: #c4b7ff 0px 5px 0px;
    border-radius: 50px;
    color: #6949ff;
    text-align: center;
    font-weight: 600;
    padding: 6px;
    transition: transform 200ms;
  }
  .haveAccountButton:hover {
    transform: scale(1.05);
  }
`;
