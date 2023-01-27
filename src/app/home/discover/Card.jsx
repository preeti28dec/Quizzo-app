"use client";
import React from "react";
import Image from "next/image";
import ItemCard from "../../../componets/card/ItemCard";
export default function Card({ value }) {
  return (
    <ItemCard>
      <div className="relative">
        <Image
          src={value.url}
          alt="loding imag"
          width={500}
          height={500}
          priority={true}
          className="h-36 object-cover w-full"
        />
        <div className="absolute top-[105px] text-sm right-1 bg-[#6949ff] text-white px-2 py-1 rounded-lg">
          {value.time}
        </div>
        <div className="p-2">
          <div className="font-bold text-lg">{value.desc}</div>
          <div className=" flex items-center gap-2 py-2">
            <div>
              <Image
                src={value.userUrl}
                alt="loding imag"
                width={500}
                height={500}
                priority={true}
                className="rounded-full w-[30px] object-cover "
              />
            </div>
            <div className="text-sm text-[#41403f]">{value.name}</div>
          </div>
        </div>
      </div>
    </ItemCard>
  );
}




