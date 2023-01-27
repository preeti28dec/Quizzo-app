"use client";
import React from "react";

export default function Contact({ value }) {
  return (
    <div>
      <div className="border p-5 rounded-2xl my-6">
        <div className="flex items-center gap-4">
          <div className="text-[#6949ff] text-2xl">{value.icon}</div>
          <div className="font-bold">{value.name}</div>
        </div>
      </div>
    </div>
  );
}
