import React from "react";
import styled from "styled-components";

export default function Favorites({ value }) {
  return (
    <DiscoverCard1>
      <div className="border border-gray-200 rounded-lg   mb-4   overflow-hidden">
        <div className="flex gap-4 items-center relative">
          <img className="w-[120px] h-[100px] " src={value.image} alt="logo" />
          <div className="absolute left-[70px] top-14 p-1 bg-[#6949ff] text-white text-sm rounded-md">
            {value.time}
          </div>
          <div>
            <div className="font-bold text-[20px] heading ">
              {value.heading}
            </div>
            <div className="flex items-center gap-4 text-sm  text-[#929694]">
              <div>{value.month}</div>
              <div> &#8226; {value.play}</div>
            </div>
            <div className="flex gap-2 items-center my-2">
              <img className="w-6 rounded-full" src={value.avtar} alt="logo" />
              <div className="text-sm font-bold text-[#3f3f3f]">
                {value.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DiscoverCard1>
  );
}

const DiscoverCard1 = styled.div`
  .heading {
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
