"use client";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import Link from "next/link";
import DiscoverCard from "./card";
import MainHeader from "../header/mainHeader";
import { DiscoverItemList } from "../../utils/data";
function DiscoverItems() {
  return (
    <DiscoverItems1>
      <MainHeader
        title={
          <div className="flex justify-between items-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <Link href="/home">
                <div>
                  <BsArrowLeft className="text-2xl" />
                </div>
              </Link>
              <div className="font-bold text-[20px]">Discover</div>
            </div>
            <FiSearch className="text-xl" />
          </div>
        }
      />

      <div className="px-4 pb-6">
        {DiscoverItemList.map((i) => {
          return <DiscoverCard value={i} key={i.name} />;
        })}
      </div>
    </DiscoverItems1>
  );
}

export default DiscoverItems;
const DiscoverItems1 = styled.div``;
