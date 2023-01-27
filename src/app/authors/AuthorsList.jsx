"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export default function AuthorsList({ value }) {
  const [Follow, setFollow] = useState(false);
  return (
    <Root>
      <Link href="/profile">
        <div className="flex gap-2 items-center ">
          <Image
            src={value.url}
            alt="loding imag"
            className="rounded-full w-14 object-cover "
            width={500}
            height={500}
          />
          <div className="flex ">
            <div>
              <div className="font-bold  ">{value.name}</div>
              <div className="font-semibold text-sm text-[#616161]">
                {value.username}
              </div>
            </div>
            {value.vipTick ? (
              <div className="text-[#1a96f0] mt-1">{value.vipTick}</div>
            ) : null}
          </div>
        </div>
      </Link>
      <button
        onClick={() => setFollow((s) => !s)}
        className={
          Follow
            ? "text-sm text-[#6949ff] rounded-full py-2 px-4 border font-bold border-[#6949ff]"
            : "text-sm text-white rounded-full py-2 px-4 bg-[#6949ff]"
        }
      >
        {Follow ? "Following" : "Follow"}
      </button>
    </Root>
  );
}
const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px;
`;
