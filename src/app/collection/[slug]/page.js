"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CollectionData, FavoritesItem } from "../../../utils/data";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import styled from "styled-components";
import TopicsCard from "./card";
import { FiSearch } from "react-icons/fi";
import MainHeader from "../../header/mainHeader";

function Topics() {
  const query = useSearchParams();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(CollectionData.filter((i) => i.id == query.get("id"))[0]);
  }, [query]);

  return (
    <Topics1>
      <MainHeader
        title={
          <div className="flex justify-between items-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <Link href="/home">
                <div>
                  <BsArrowLeft className="text-2xl" />
                </div>
              </Link>
              <div className="font-bold text-[20px]">{data?.heading}</div>
            </div>
            <FiSearch className="text-xl" />
          </div>
        }
      />
      <div className="px-4">
        <img className=" rounded-2xl" src={data?.image} alt="sf" />
        <div className="flex justify-between mt-4">
          <h1 className="text-2xl font-bold">245 Quizzo</h1>
          <div className="flex gap-2 items-center text-[#6949ff] font-semibold">
            <p className="text-[18px]">Default</p>
            <HiOutlineArrowsUpDown className="text-[18px]" />
          </div>
        </div>
        <div>
          {FavoritesItem.map((i) => {
            return <TopicsCard value={i} key={i.name} />;
          })}
        </div>
      </div>
    </Topics1>
  );
}

export default Topics;
const Topics1 = styled.div`
  .header {
    padding: 1rem;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
  }
`;
