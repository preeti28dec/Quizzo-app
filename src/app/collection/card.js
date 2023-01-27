"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

function CollectionCard({ value }) {
  const router = useRouter();
  return (
    <Root
      onClick={() => {
        router.push(`${value.link_}?id=${value.id}`);
      }}
    >
      <Image
        src={value.image}
        alt="loding imag"
        className="rounded-lg h-[120px] w-[200px] object-cover"
        width={500}
        height={500}
      />
      <div className="absolute -mt-8 text-white font-bold ml-2">
        {value.heading}
      </div>
    </Root>
  );
}

export default CollectionCard;
const Root = styled.div`
  position: relative;
`;
