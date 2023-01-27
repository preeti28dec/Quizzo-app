"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Card({ value }) {
  return (
    <Root className="">
      <Image
        src={value.userUrl}
        alt="loding imag"
        className="rounded-full  object-cover "
        width={500}
        height={500}
        priority={true}
      />

      <div className="font-bold p-1  ">{value.name}</div>
    </Root>
  );
}
const Root = styled.div`
  border-radius: 20px;
  width: 90px;
  font-weight: 600;
  text-align: center;
  margin-right: 10px;
  margin-top: 25px;
`;
