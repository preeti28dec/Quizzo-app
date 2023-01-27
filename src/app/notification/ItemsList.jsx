"use client";
import React, { useState } from "react";
import styled from "styled-components";
import SwitchBtton from "../../componets/button/SwitchBtton";
export default function ItemsList({ value }) {
  const [CorrectAns, setCorrectAns] = useState(false);
  return (
    <Root>
      <div className="text-lg font-semibold">{value.name}</div>
      <SwitchBtton
        isOn={CorrectAns}
        handleToggle={() => setCorrectAns(!CorrectAns)}
      />
    </Root>
  );
}
const Root = styled.div`
  padding: 10px 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
