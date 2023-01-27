'user client'
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import MainHeader from "../header/mainHeader";
import ItemsList from "./ItemsList";
import {BiChevronRight} from 'react-icons/bi'
import SkipButton from "../../componets/button/skipButton";
const Items = [
  { name: "Remember me", id: 1 },
  { name: "Biometric ID", id: 2 },
  { name: "Face ID", id: 3 },
  { name: "SMS Authenticator", id: 4 },
  { name: "Google Authenticator", id: 5 },
];
export default function Security() {
  return (
    <div>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/setting">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl">Security</div>
          </div>
        }
      />
      <div>
        {Items.map((i) => {
          return <ItemsList key={i.id} value={i} />;
        })}

        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-semibold text-lg">Device Management</div>
          <BiChevronRight className="text-2xl" />
        </div>

        <div className="flex justify-between items-center px-4 ">
          <div className="font-semibold text-lg">Change Email</div>
          <BiChevronRight className="text-2xl" />
        </div>
        <SkipButton title={"Change password"}/>
      </div>
    </div>
  );
}
