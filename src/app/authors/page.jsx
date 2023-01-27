"use client";

import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import MainHeader from "../header/mainHeader";
import AuthorsList from "./AuthorsList";
import Link from "next/link";
import { AuthorsItems } from "../../utils/data";

export default function Authors() {
  return (
    <div>
      <MainHeader
        title={
          <div className="flex justify-between items-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <Link href="/home">
                <div>
                  <BsArrowLeft className="text-2xl" />
                </div>
              </Link>
              <div className="font-bold text-[20px]">Top Authors</div>
            </div>
            <FiSearch className="text-xl" />
          </div>
        }
      />

      <div className="px-4  pb-6">
        {AuthorsItems.map((i) => {
          return <AuthorsList value={i} key={i.id} />;
        })}
      </div>
    </div>
  );
}
