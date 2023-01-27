"use client";
import React from "react";
import {
  BsArrowLeft,
  BsChevronRight,
  BsFacebook,
  BsArrowRight,
} from "react-icons/bs";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiFeather } from "react-icons/gi";
import { RiBook2Fill } from "react-icons/ri";
import styled from "styled-components";
import { useProgress } from "../../context/context";
import MainHeader from "../header/mainHeader";
import Image from "next/image";
import { FindFriendItem } from "../../utils/data";


function FindFriends() {
  const { setSearch, search } = useProgress();

  return (
    <FindFriends1>
      <MainHeader
        title={
          <div className="flex items-center gap-2">
            <Link href="/home">
              <div>
                <BsArrowLeft className="text-2xl" />
              </div>
            </Link>
            <div className="font-bold text-[20px]">Find Friends</div>
          </div>
        }
      />
      <div className="relative mt-4 px-4">
        <CiSearch className="text-2xl absolute top-3 text-[#d8d8d8] left-6" />
        <input
          className="bg-[#f5f5f5] py-3 rounded-2xl w-full px-10 outline-none "
          type="text"
          placeholder="Search email, name, or phone number"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className=" border mx-4 facebook-box border-gray-300 mt-10 rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="text-[40px] text-[#55acee]">
              <RiBook2Fill />
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Search Contact</h1>
              <div className="text-[#b6b5b5]">Find friend via phone</div>
            </div>
          </div>
          <div>
            <BsChevronRight />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center mt-6">
            <div className="text-[40px] text-blue-600">
              <BsFacebook />
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Contact to Facebook</h1>
              <div className="text-[#b6b5b5]">Find friend via facebook</div>
            </div>
          </div>
          <div>
            <BsChevronRight />
          </div>
        </div>
        <hr className="mt-4" />

        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center mt-6">
            <div className="text-[40px] text-[#d99e82]">
              <GiFeather />
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Invite Friends</h1>
              <div className="text-[#b6b5b5]">Find friend to play ludo</div>
            </div>
          </div>
          <div>
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 px-4">
        <h1 className="text-[20px] font-bold">People you may know</h1>
        <Link href="/discover">
          <div className="flex gap-4 items-center text-[#6949ff] text-xl ">
            <p>view all</p>
            <p>
              <BsArrowRight />
            </p>
          </div>
        </Link>
      </div>

      {FindFriendItem.filter((i) => {
        if (search === "") {
          return i;
        } else if (
          i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return i;
        }
      }).map((i) => {
        return (
          <div
            className="flex justify-between items-center mt-4 px-4"
            key={i.name}
          >
            <div className="flex gap-4 items-center">
              <Image
                src={i.image}
                className="rounded-full w-14"
                alt="logo"
                width={500}
                height={500}
              />

              <p className="font-bold text-[18px]">{i.name}</p>
            </div>
            <button className="bg-[#6949ff] text-white px-4 py-1 text-sm rounded-full">
              Follow
            </button>
          </div>
        );
      })}
    </FindFriends1>
  );
}

export default FindFriends;
const FindFriends1 = styled.div`
  .facebook-box {
    box-shadow: #cacfcc 0px 4px 0px;
  }
`;
