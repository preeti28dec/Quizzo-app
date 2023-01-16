"use client";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Link from "next/link";
import DiscoverCard from "./card";

const Item = [
  {
    image: "../assest/calendar.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assest/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assest/idea-hand.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assest/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assest/calendar.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always from",
    time: "16 Qs",
    avtar: "../assest/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assest/calendar.jpg",
    name: "Titus Kitamura",
    heading: "Can you Imagine, world",
    time: "16 Qs",
    avtar: "../assest/image6.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assest/calendar.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assest/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image:"../assest/calendar.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assest/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assest/calendar.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always From",
    time: "16 Qs",
    avtar: "../assest/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  }
];

function DiscoverItems() {
  return (
    <DiscoverItems1>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <div>
              <BsArrowLeft className="text-2xl" />
            </div>
          </Link>
          <div className="font-bold text-[20px]">Discover</div>
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
      <div>
        {Item.map((i) => {
          return <DiscoverCard value={i} key={i.name} />;
        })}
      </div>
    </DiscoverItems1>
  );
}

export default DiscoverItems;
const DiscoverItems1 = styled.div`
  padding: 1rem;
`;