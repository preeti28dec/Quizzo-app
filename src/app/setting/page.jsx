"use client";
import React, { useState } from "react";
import MainHeader from "../header/mainHeader";
import Link from "next/link";
import {
  BsArrowLeft,
  BsExclamationSquareFill,
  BsFillEyeFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { HiDocumentText, HiVolumeUp } from "react-icons/hi";
import styled from "styled-components";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";
import DarkButton from "../../componets/button/DarkButton";
import LightButton from "../../componets/button/LightButton";
import SwitchBtton from "../../componets/button/SwitchBtton";
export default function Setting() {
  const [openModel, setOpenModel] = useState(false);
  const [CorrectAns, setCorrectAns] = useState(false);
  return (
    <Root>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/home">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl"> Setting</div>
          </div>
        }
      />
      <div className="find_user_card">
        <div>
          <div className="text-2xl ">
            Play quizzes without ads and restrictions
          </div>
          <Link href="/premium">
            <button className="text-[#7c60ff] bg-white rounded-full my-4 px-4 py-2">
              GO PREMIUM
            </button>
          </Link>
        </div>
        <div className="relative">
          <div className="border-white absolute top-[60px] right-[100px] border-2 rounded-full w-[45px] h-[45px] overflow-hidden">
            <Image
              src="/assest/user1.svg"
              className="w-full"
              alt="1loding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <Image
              src="/assest/user2.svg"
              className="w-full"
              alt="1loding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white absolute top-[35px] right-[40px] border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <Image
              src="/assest/user3.svg"
              className="w-full"
              alt="1loding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white border-2 absolute top-[70px] right-[0px] rounded-full w-[50px] h-[50px] overflow-hidden">
            <Image
              src="/assest/user4.svg"
              className="w-full"
              alt="1loding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white absolute top-[80px] right-[60px] border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <Image
              src="/assest/user3.svg"
              className="w-full"
              alt="1loding image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="px-4 pb-1">
        <div className=" flex justify-between items-center my-6">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#fff7eb] p-3  cursor-pointer rounded-full">
              <FaUser className="text-4xl p-1 text-[#fea01c]" />
            </div>
            <div className="font-bold text-xl">Personal Info</div>
          </div>
          <Link href="/personal-info">
            <BiChevronRight className="text-2xl" />
          </Link>
        </div>
        <div className=" flex justify-between items-center my-6">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#fff3f3] p-3  cursor-pointer rounded-full">
              <IoMdNotifications className="text-4xl p-1 text-[#ff6c75]" />
            </div>
            <div className="font-bold text-xl">Notifications</div>
          </div>
          <Link href="/notification">
            <BiChevronRight className="text-2xl" />
          </Link>
        </div>
        <div className=" flex justify-between items-center my-6">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#f3f1ff] p-3  cursor-pointer rounded-full">
              <HiVolumeUp className="text-4xl p-1 text-[#7d60ff]" />
            </div>
            <div className="font-bold text-xl">Music & Effects</div>
          </div>
          <Link href="/music-effects">
            <BiChevronRight className="text-2xl" />
          </Link>
        </div>
        <div className=" flex justify-between items-center my-6">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#eef9f2] p-3  cursor-pointer rounded-full">
              <BsShieldFillCheck className="text-4xl p-1 text-[#43dba5]" />
            </div>
            <div className="font-bold text-xl">Security</div>
          </div>
          <Link href="/security">
            <BiChevronRight className="text-2xl" />
          </Link>
        </div>
        <div className=" flex justify-between items-center my-6">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#eef4ff] p-3  cursor-pointer rounded-full">
              <BsFillEyeFill className="text-4xl p-1 text-[#3b7bfe]" />
            </div>
            <div className="font-bold text-xl">Dark Mode</div>
          </div>
          <SwitchBtton
                    isOn={CorrectAns}
                    handleToggle={() => setCorrectAns(!CorrectAns)}
                  />
          {/* <BiChevronRight className="text-2xl" /> */}
        </div>
        <div className=" flex justify-between items-center my-6">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#fff7eb] p-3  cursor-pointer rounded-full">
              <HiDocumentText className="text-4xl p-1 text-[#fea01c]" />
            </div>
            <div className="font-bold text-xl">Help Center</div>
          </div>
          <Link href="/help-center">
            <BiChevronRight className="text-2xl" />
          </Link>
        </div>
        <div className=" flex justify-between items-center my-6 ">
          <div className="flex gap-4 items-center ">
            <div className="bg-[#f3f1ff] p-3  cursor-pointer rounded-full">
              <BsExclamationSquareFill className="text-4xl p-1 text-[#7456ff]" />
            </div>
            <div className="font-bold text-xl">About Quizzo</div>
          </div>
          <Link href="/about-quiz">
            <BiChevronRight className="text-2xl" />
          </Link>
        </div>
        <div
          onClick={() => setOpenModel((s) => !s)}
          className="flex justify-between items-center my-6"
        >
          <div className="flex gap-4 items-center ">
            <div className="bg-[#fff3f3] p-3  cursor-pointer rounded-full">
              <IoLogOut className="text-4xl p-1 text-[#fe828d]" />
            </div>
            <div className="font-bold text-xl">Logout</div>
          </div>

          <BiChevronRight className="text-2xl" />
        </div>
      </div>
      <div>
        {openModel ? (
          <>
            <div
              onClick={() => setOpenModel((s) => !s)}
              className="left-0 h-[100%] fixed z-10 w-[100%] bottom-0 bg-[#000000ad]"
            >
              <div className="w-full bottom-0 absolute  py-4 bg-white rounded-t-3xl p-2">
                <hr className="w-8 mx-auto" />
                <div className="text-center font-bold text-[#fa7c7c] text-xl py-4">
                  Logout
                </div>
                <hr />
                <div className="text-center my-4 font-bold">
                  Are you sure you wnat to log out
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Link href="/Setting">
                    <DarkButton title="Cancel" />
                  </Link>
                  <Link href="/login">
                    <LightButton title="Yes, Logout" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Root>
  );
}
const Root = styled.div`
  .find_user_card {
    box-shadow: #543acc 0px 5px 0px;
    margin: 2px 16px;
    border-radius: 20px;
    padding: 20px 10px;
    font-weight: 600;
    background-color: #7f62ff;
    color: white;
    display: flex;
    gap: 4px;
  }
`;
