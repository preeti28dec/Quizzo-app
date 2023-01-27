"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Card({ value }) {
  return (
    <Root className="border">
      <div className="relative">
        <Image
          src={value.image}
          alt="loding imag"
          className="h-36 object-cover w-full"
          width={500}
          height={500}
          priority={true}
        />
        <div className="absolute top-[105px] left-1 font-bold text-xl text-white px-2 py-1 rounded-lg">
          {value.heading}
        </div>
      </div>
    </Root>
  );
}
const Root = styled.div`
  width: 220px;
  margin: 25px 0px;
  border-radius: 20px;
  font-weight: 600;
  overflow: hidden;
`;
