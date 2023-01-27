"use client";
import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";
import Link from "next/link";
import { DiscoverCard } from "../../../utils/data";

export default function Discover() {
  return (
    <Root>
      <div className="flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Discover</div>
        <Link href="/discover" className="cursor-pointer">
          <div className="text-[#6949ff] flex items-center gap-3 text-xl font-semibold">
            <div>View all</div>
            <BsArrowRight />
          </div>
        </Link>
      </div>

      <div className="hs  ml-4 full no-scrollbar sm:flex sm:justify-center sm:gap-4 ">
        {DiscoverCard.map((i) => {
          return <Card value={i} key={i.id} />;
        })}
      </div>
    </Root>
  );
}
const Root = styled.div`
  padding: 1rem 0px;

  .no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding: 0;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hs > li,
  .item {
    /* margin-left: -1rem;
    padding-left: 2rem; */
    scroll-snap-align: center;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    .hs {
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      overflow-x: scroll;
      scroll-snap-type: x proximity;
      margin-left: -1rem;
      padding-left: 2rem;
    }
  }
`;
