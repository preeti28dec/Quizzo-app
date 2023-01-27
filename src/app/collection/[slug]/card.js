"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function TopicsCard({ value }) {
  return (
    <TopicsCard1>
      <div className="border border-gray-200 rounded-lg  mt-4  overflow-hidden">
        <div className="flex gap-4 items-center relative">
          <Image
            src={value.image}
            alt="loding imag"
            className="w-[120px] h-[100px] "
            width={100}
            height={100}
          />
          <div className="absolute left-[70px] top-14 p-1 bg-[#6949ff] text-white text-sm rounded-md">
            {value.time}
          </div>
          <div>
            <div className="font-bold text-[20px] heading ">
              {value.heading}
            </div>
            <div className="flex items-center gap-4 text-[14px] opacity-70">
              <div>{value.month}</div>
              <div> &#8226; {value.play}</div>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={value.avtar}
                alt="loding imag"
                className="w-8 rounded-full"
                width={100}
                height={100}
              />
              <div className="text-[14px] font-bold">{value.name}</div>
            </div>
          </div>
        </div>
      </div>
    </TopicsCard1>
  );
}

export default TopicsCard;
const TopicsCard1 = styled.div`
  .heading {
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
