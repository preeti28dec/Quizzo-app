"use client";
import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GetStarted from "../../componets/button/getStarted";
import Image from "next/image";
import { CreateQuizTitle } from "../../utils/data";

export default function CreateQuiz() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Root>
      <Slider {...settings}>
        {CreateQuizTitle.map((i) => {
          return (
            <div key={i.id}>
              <Image
                src={i.url}
                className="h-[400px]"
                alt="loding image"
                width={500}
                height={500}
              />
              <div className="text-title text-2xl font-bold text-center my-4">
                {i.title}
              </div>
            </div>
          );
        })}
      </Slider>
      <GetStarted />
    </Root>
  );
}
const Root = styled.div`
  position: relative;
  overflow: hidden;
  .slick-track {
    display: flex !important;
    gap: 1rem;
  }
  .slick-dots li.slick-active button::before {
    opacity: 0.75;
    color: var(--blueColor) !important;
  }
  ul.slick-dots {
    position: initial;
  }
  @media (min-width: 321px) {
    .text-title {
      font-size: 30px;
      line-height: 36px;
      margin: auto;
    }
  }
`;
