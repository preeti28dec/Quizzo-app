"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function CollectionCard({ value }) {
  return (
    <Root>
      <Image
        src={value.image}
        alt="loding imag"
        className="rounded-lg h-[120px] object-cover"
        width={500}
        height={500}
      />
      <div className="absolute -mt-8 text-white font-bold ml-2">
        {value.heading}
      </div>
    </Root>
  );
}
const Root = styled.div`
  position: relative;
`;
