import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import CollectionCard from "./card";
import MainHeader from "../header/mainHeader";
import { FiSearch } from "react-icons/fi";
import { CollectionData } from "../../utils/data";
export default function Collections() {
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
              <div className="font-bold text-[20px]">Top Collections</div>
            </div>
            <FiSearch className="text-xl" />
          </div>
        }
      />

      <div className="grid grid-cols-2 gap-5 px-4 mb-4">
        {CollectionData.map((i) => {
          return <CollectionCard value={i} key={i.id} />;
        })}
      </div>
    </div>
  );
}

