'use client'
import React from 'react'
import styled from "styled-components";
export default function SkipButton(props) {
  return (
    <Root>
      <div className="skipButton">
        <button>{props.title}</button>
      </div>
    </Root>
  )
}
const Root = styled.div`
  .skipButton {
    background-color: var(--lightPurple);
    box-shadow: #c4b7ff 0px 5px 0px;
    margin: 25px 20px;
    border-radius: 50px;
    padding: 15px 12px;
    color: #6949ff;
    text-align: center;
    font-weight: 600;
    transition: transform 200ms;
  }
  .skipButton:hover {
      transform: scale(1.05);
  }
`;