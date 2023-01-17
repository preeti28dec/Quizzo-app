'use client'
import React from "react";
import styled from "styled-components";
import SkipButton from "../../componets/button/skipButton";
import { FaBriefcase, FaUserFriends, FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import Header from "../header/header";
import Link from "next/link";
import { useProgress } from "../../context/context";
const Typedata = [
  {
    id: 1,
    icon: <FaUser />,
    name: "Personal",
    iconColor: "bg-[#336de3]",
    color: "bg-[#3678fd]",
  },
  {
    id: 2,
    icon: <FaUserFriends />,
    name: "Teacher",
    iconColor: "bg-[#e28e19]",
    color: "bg-[#fd9a0f]",
  },
  {
    id: 3,
    icon: <HiUserGroup />,
    name: "Student",
    iconColor: "bg-[#36c292]",
    color: "bg-[#39daa0]",
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    name: "Professional",
    iconColor: "bg-[#e46974]",
    color: "bg-[#ff6770]",
  },
];
export default function TypeAccount() {
  const { setProgress } = useProgress();
  return (
    <Root>
      <Header />
      <div className="mx-4 mb-4 mt-8 text-2xl text-center font-bold">
        What type of account do you like to create?🤠
      </div>
      <div className="text-sm font-semibold py-2 text-[#212121] text-center">
        You can skip it if you're not sure.
      </div>
      <div className="mb-8">
        {Typedata.map((i) => {
          return (
            <Link href="/slider" key={i.id}>
              <div
                onClick={() => setProgress("50%")}
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
      <Link href="/slider" onClick={() => setProgress("50%")}>
        <SkipButton />
      </Link>
    </Root>
  );
}

const Root = styled.div``;
