'user client'
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import MainHeader from "../header/mainHeader";
import ItemsList from "./ItemsList";
const Items = [
  { name: "Music", id: 1 },
  { name: "Sound Effects", id: 2 },
  { name: "Animation Effects", id: 3 },
  { name: "Visual Effects", id: 4 },
];
export default function MusicEffects() {
  return (
    <div>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/setting">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl"> Music & Effects</div>
          </div>
        }
      />
        <div>
        {Items.map((i) => {
          return(
          <ItemsList key={i.id} value={i} />
          )
        })}
      </div>
    </div>
  );
}
