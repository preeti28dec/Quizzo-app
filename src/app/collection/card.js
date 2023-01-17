"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

function CollectionCard({ value }) {
  const router = useRouter();
  return (
    <Root
      onClick={() => {
        router.push(`${value.link_}?id=${value.id}`);
      }}
    >
      <img className="rounded-lg h-[120px] w-[200px]" src={value.image} alt="logo" />
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
