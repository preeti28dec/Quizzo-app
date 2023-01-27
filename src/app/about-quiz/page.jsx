"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { Aboutquiz } from "../../utils/data";
import MainHeader from "../header/mainHeader";

export default function AboutQuzzio() {
  return (
    <div>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/setting">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl"> About Quzzio</div>
          </div>
        }
      />

      <div className="px-4">
        <Image
          src="/logo.png"
          alt="loding imag"
          className="mx-auto  "
          width={200}
          height={200}
        />
        <div className="text-3xl font-bold text-center">Quizzo v5.7.6</div>
        <hr className="my-4" />

        <div>
          {Aboutquiz.map((i) => {
            return (
              <div
                key={i.id}
                className="flex my-4 items-center justify-between"
              >
                <div className="font-bold">{i.name}</div>
                <BiChevronRight className="text-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
