'user client'
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import MainHeader from "../header/mainHeader";

export default function PersonalInfo() {
  return (
    <div>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/setting">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl"> Personal Info</div>
          </div>
        }
      />
    </div>
  );
}
