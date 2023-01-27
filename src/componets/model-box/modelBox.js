"use client";
import React from "react";
import styled from "styled-components";

function ModelBox(props) {
  return (
    <ModelBox1>
      <div className="left-0 h-[100%] absolute z-10 w-[100%] top-0 bg-[#000000ad]">
        <div className=" bg-white p-4  modelBox ">
          <div className="text-sm font-semibold text-center">{props.title}</div>
          <div>{props.children}</div>
        </div>
      </div>
    </ModelBox1>
  );
}

export default ModelBox;
const ModelBox1 = styled.div`
  .modelBox {
    position: absolute;
    border-radius: 20px;
    left: 5%;
    width: 90%;
    top: 20%;
    transform: translate(-50% -50%);
  }
`;
