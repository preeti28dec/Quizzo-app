"use client";
import React, { useState } from "react";
import {
  HiOutlineUser,
  HiSquares2X2,
} from "react-icons/hi2";
import { BsPlusSquare } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const [footerTab, setFooterTab] = useState("Home");
  return (
    <div className="sticky bottom-0 bg-white text-[#a29f9d] border-t-[1px]  rounded-t-2xl p-6">
      <div className="flex text-xl  justify-between items-center">
        <Link href="/home">
          <div
            className={footerTab == "Home" ? "text-black" : ""}
            onClick={() => setFooterTab("Home")}
          >
            <IoHomeOutline className="ml-2" />
            <div className="text-sm">Home</div>
          </div>
        </Link>
        <Link href="/library">
          <div
            className={footerTab == "Library" ? "text-black" : ""}
            onClick={() => setFooterTab("Library")}
          >
            <HiSquares2X2 className="ml-2" />
            <div className="text-sm">Library</div>
          </div>
        </Link>
        <Link href="image-collection">
          <div className="">
            <Image
              src="/logo.png"
              alt="loding imag"
              className="w-[24px]  "
              width={100}
              height={100}
            />

            <div className="text-sm">Join</div>
          </div>
        </Link>
        <Link href="/create-quizzo">
          <div
            className={footerTab == "Create" ? "text-black" : ""}
            onClick={() => setFooterTab("Create")}
          >
            <BsPlusSquare className="ml-2" />
            <div className="text-sm">Create</div>
          </div>
        </Link>
        <Link href="/profile">
          <div
            className={footerTab == "Profile" ? "text-black" : ""}
            onClick={() => setFooterTab("Profile")}
          >
            <HiOutlineUser className="ml-2" />
            <div className="text-sm">Profile</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
