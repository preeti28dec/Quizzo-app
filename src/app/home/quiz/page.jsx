"use client"
import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";
const card = [
  {
    id: 1,
    url: "./assest/education.jpg",
    time: "16 Qs",
    name: "Education",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assest/image1.jpg",
  },
  {
    id: 2,
    url: "./assest/car-img.jpg",
    time: "16 Qs",
    name: "Game",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assest/image2.jpg",
  },
  {
    id: 3,
    url: "./assest/hand-puzzle.jpg",
    time: "16 Qs",
    name: "Bussiness",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assest/image3.jpg",
  },
  {
    id: 4,
    url: "./assest/earth-img.jpg",
    time: "16 Qs",
    name: "Plants",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assest/image4.jpg",
  },
  {
    id: 5,
    url: "./assest/piggy-bank.jpg",
    time: "16 Qs",
    name: "Finance",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assest/image5.jpg",
  },
  {
    id: 6,
    url: "./assest/lifestyle.jpg",
    time: "16 Qs",
    name: "Lifstyle",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assest/image6.jpg",
  },
];
export default function TrendingQuiz() {
  return (
    <Root>
      <div className="flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Trending Quiz</div>
        <div className="text-[#6949ff] flex items-center gap-3 text-xl font-semibold">
          <div>View all</div>
          <BsArrowRight />
        </div>
      </div>

      <div className="hs ml-4 full no-scrollbar sm:flex sm:justify-center sm:gap-4 ">
        {card.map((i) => {
          return <Card value={i} key={i.id} />;
        })}
      </div>
    </Root>
  );
}
const Root = styled.div`
  padding: 1rem 0px;

  .no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding: 0;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hs > li,
  .item {
    scroll-snap-align: center;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    .hs {
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      overflow-x: scroll;
      scroll-snap-type: x proximity;
    }
  }
`;
