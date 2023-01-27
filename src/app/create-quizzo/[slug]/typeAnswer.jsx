"use client";
import React, { useState } from "react";
import styled from "styled-components";
import SwitchBtton from "../../../componets/button/SwitchBtton";
import ModelBox from "../../../componets/model-box/modelBox";
import { useProgress } from "../../../context/context";
import { FaCheckSquare } from "react-icons/fa";

export default function TypeAnswereCard() {
  const [option1, setOption1] = useState("Add Answer");
  const [activeOption, setActiveOption] = useState(false);
  const [CorrectAns, setCorrectAns] = useState(false);
  const { setSearch, search } = useProgress();
  const value = {
    color_: "bg-[#12d18e]",
    text: "Add Answer",
    shadowB: "shadow-[#0cb777] shadow-md",
  };
  console.log(CorrectAns, "CorrectAns");
  return (
    <Root>
      <div
        onClick={() => setActiveOption((s) => !s)}
        className={`${value.color_} font-bold ${value.shadowB} relative text-white px-6 py-24 text-center  rounded-2xl box-shadow`}
      >
        {CorrectAns ? (
          <FaCheckSquare className="absolute top-4 text-xl left-4 text-white" />
        ) : null}
        {option1}
      </div>
      {activeOption ? (
        <>
          <ModelBox
            title={
              <div>
                <div className="font-bold text-[20px] text-center">
                  Add Answer
                </div>
                <hr className="my-4" />

                <input
                  placeholder="Add Answere"
                  onChange={(e) => setSearch(e.target.value)}
                  className={`${value.color_} font-bold ${value.shadowB} text-white placeholder-white  p-8 outline-none text-center text-lg rounded-2xl box-shadow`}
                />
                <div className="flex items-center px-4 py-6 justify-between">
                  <div
                    className="text-lg font-bold"
                    onClick={() => {
                      setOption1(search);
                      setActiveOption((s) => !s);
                    }}
                  >
                    Correct Answer
                  </div>
                  <SwitchBtton
                    isOn={CorrectAns}
                    handleToggle={() => setCorrectAns(!CorrectAns)}
                  />
                </div>
              </div>
            }
          />
        </>
      ) : null}
    </Root>
  );
}

const Root = styled.div``;
