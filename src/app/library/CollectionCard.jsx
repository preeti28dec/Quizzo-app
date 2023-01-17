"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

export default function CollectionCard({ value }) {
  const router = useRouter();
  return (
    <Root
      onClick={() => {
        router.push(`${value.link_}?id=${value.id}`);
      }}
    >
      <Link href="/image-collection">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={value.image}
          alt="logo"
        />
        <div className="absolute -mt-8 text-white font-bold ml-2">
          {value.heading}
        </div>
      </Link>
    </Root>
  );
}
const Root = styled.div`
  position: relative;
  width: 47%;
  height: 100px;
`;
