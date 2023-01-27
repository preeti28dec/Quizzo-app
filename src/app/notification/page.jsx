'use client'
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NotificationsItems } from "../../utils/data";
import MainHeader from "../header/mainHeader";
import ItemsList from "./ItemsList";

export default function Notifications() {
  return (
    <div>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/setting">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl"> Notifications</div>
          </div>
        }
      />
      <div>
        {NotificationsItems.map((i) => {
          return(
          <ItemsList key={i.id} value={i} />
          )
        })}
      </div>
    </div>
  );
}
