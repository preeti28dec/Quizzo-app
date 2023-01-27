"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import MainHeader from "../header/mainHeader";
import CollectionCard from "./CollectionCard";
import Quizzo from "./Quizzo";
import Favorites from "./Favorites";
import Link from "next/link";
import { CollectionData, FavoritesItem, QuizzoItem } from "../../utils/data";
import Image from "next/image";
import styled from "styled-components";

export default function Library() {
  const [tab, setTab] = useState("Quizzo");
  return (
    <Library1>
      <MainHeader
        title={
          <div className="flex justify-between items-center ">
            <Link href="/home">
              <div className="flex gap-2 ">
                <Image
                  src="/logo.png"
                  className="w-8 h-8 object-contain"
                  alt="loding logo"
                  width={500}
                  height={500}
                />
                <div className="text-2xl font-bold text-center ">Library</div>
              </div>
            </Link>
            <div className="flex items-center gap-2 text-2xl">
              <FiSearch />
            </div>
          </div>
        }
      />
      <div className="px-4">
        <div className="grid grid-cols-3 mb-4 ">
          <button
            onClick={() => setTab("Quizzo")}
            className={
              tab == "Quizzo"
                ? "border-b-2 border-[#6949ff] py-2 font-bold  text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b-2 font-bold border-[#9e9e9e]"
            }
          >
            My Quizzo
          </button>
          <button
            onClick={() => setTab("Favorite")}
            className={
              tab == "Favorite"
                ? "border-b-2 border-[#6949ff] py-2 font-bold  text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b-2 font-bold border-[#9e9e9e]"
            }
          >
            Favorite
          </button>
          <button
            onClick={() => setTab("Collection")}
            className={
              tab == "Collection"
                ? " border-b-2 border-[#6949ff] py-2 font-bold text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b-2 font-bold border-[#9e9e9e]"
            }
          >
            Collection
          </button>
        </div>
        {tab === "Quizzo" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">45 Quizzo</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="my-4">
              {QuizzoItem.map((i) => {
                return <Quizzo value={i} key={i.name} />;
              })}
            </div>
          </>
        ) : null}
        {tab === "Favorite" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">28 Favorite</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="my-4">
              {FavoritesItem.map((i) => {
                return <Favorites value={i} key={i.name} />;
              })}
            </div>
          </>
        ) : null}
        {tab === "Collection" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">7 Collections</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3  my-3">
              {CollectionData.map((i) => {
                return <CollectionCard value={i} key={i.id} />;
              })}
            </div>
          </>
        ) : null}
      </div>
    </Library1>
  );
}
const Library1 = styled.div`
padding-bottom: 50px;
`
