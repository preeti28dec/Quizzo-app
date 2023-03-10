"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import MainHeader from "../header/mainHeader";
import Authors from "./authors/page";
import Collections from "./collections/page";
import Discover from "./discover/page";
import TopPicks from "./picks/page";
import TrendingQuiz from "./quiz/page";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";

export default function Home() {
  return (
    <Root>
      <MainHeader
        title={
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 ">
              <Image
                src="/logo.png"
                className="w-8 h-8 object-contain"
                alt="loding image"
                width={100}
                height={100}
              />
              <div className="text-2xl font-bold text-center ">Quizzo</div>
            </div>
            <div className="flex items-center gap-2 text-2xl">
              <FiSearch />
              <IoNotificationsOutline />
            </div>
          </div>
        }
      />
      <div className="find_user_card">
        <div>
          <div className="text-2xl ">
            Play quiz together with your friends now!
          </div>
          <Link href="/find-friend">
            <button className="text-[#7c60ff] bg-white rounded-full my-4 px-4 py-2">
              Find Friends
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
              alt="2loding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white absolute top-[35px] right-[40px] border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <Image
              src="/assest/user3.svg"
              className="w-full"
              alt="3oding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white border-2 absolute top-[70px] right-[0px] rounded-full w-[50px] h-[50px] overflow-hidden">
            <Image
              src="/assest/user4.svg"
              className="w-full"
              alt="4loding image"
              width={500}
              height={500}
            />
          </div>
          <div className="border-white absolute top-[80px] right-[60px] border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <Image
              src="/assest/user3.svg"
              className="w-full"
              alt="5loding image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <Discover />
      <Authors />
      <Collections />
      <TrendingQuiz />
      <TopPicks />
      <Footer />
    </Root>
  );
}

const Root = styled.div`
  .find_user_card {
    box-shadow: #543acc 0px 5px 0px;
    margin: 25px 16px;
    border-radius: 20px;
    padding: 20px 10px;
    font-weight: 600;
    background-color: #7f62ff;
    color: white;
    display: flex;
    gap: 4px;
  }
`;
