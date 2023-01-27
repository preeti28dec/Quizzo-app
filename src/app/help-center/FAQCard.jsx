"use client";
import React, { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

export default function FAQCard({ value }) {
  const [open, setOpen] = useState();
  return (
    <div className="border p-4 rounded-2xl my-5">
      <div className="flex items-center justify-between">
        <div className="font-bold">{value.question}</div>
        <IoCaretDownOutline
          className="text-[#6949ff]"
          onClick={() => setOpen((s) => !s)}
        />
      </div>

      {open ? (
        <>
          <hr className="my-4" />
          <div className="">{value.desc}</div>
        </>
      ) : null}
    </div>
  );
}
