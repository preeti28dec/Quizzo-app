"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import SkipButton from "../../componets/button/skipButton";
import { FaBriefcase, FaCheckSquare } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { useProgress } from "../../context/context";
import Header from "../header/header";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
const Typedata = [
  {
    id: 1,
    icon: <IoDocumentText />,
    name: "School",
    iconColor: "bg-[#336de3]",
    color: "bg-[#3678fd]",
  },
  {
    id: 2,
    icon: <FaCheckSquare />,
    name: "Higher Education",
    iconColor: "bg-[#e28e19]",
    color: "bg-[#fd9a0f]",
  },
  {
    id: 3,
    icon: <HiUserGroup />,
    name: "Teams",
    iconColor: "bg-[#36c292]",
    color: "bg-[#39daa0]",
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    name: "Business",
    iconColor: "bg-[#e46974]",
    color: "bg-[#ff6770]",
  },
];
export default function WorkPlace() {
  const { setProgress } = useProgress();
  return (
    <Root>
      <Header
        title={
          <Link href="/slider">
            <BsArrowLeft className="text-2xl" />
          </Link>
        }
      />
      <div className="mx-4 mb-4 mt-8 text-2xl text-center font-bold">
        Describe a workplace that suits you 💼
      </div>
      <div className="text-sm font-semibold py-2 text-[#212121] text-center">
        You can skip it if you are not sure.
      </div>
      <div className="mb-8">
        {Typedata.map((i) => {
          return (
            <Link href="/slider" key={i.id}>
              <div
                onClick={() => setProgress("75%")}
                className="border m-4 rounded-lg overflow-hidden"
              >
                <div className="flex items-center gap-2">
                  <div className={`p-4 ${i.color}`}>
                    <div
                      className={`p-2 rounded-full text-2xl ${i.iconColor} text-white`}
                    >
                      {i.icon}
                    </div>
                  </div>
                  <div className="font-bold text-lg">{i.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <hr className="py-2"/>
      <Link href="/slider" onClick={() => setProgress("75%")}>
        <SkipButton title={"Skip"}/>
      </Link>
    </Root>
  );
}

const Root = styled.div``;
