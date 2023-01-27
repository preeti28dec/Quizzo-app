"use client";
import Link from "next/link";
import { useState } from "react";
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import { useProgress } from "../../context/context";
import MainHeader from "../header/mainHeader";
import Contact from "./Contact";
import FAQCard from "./FAQCard";
import { BsArrowLeft } from "react-icons/bs";

import { ContactItems, FAQItems } from "../../utils/data";

export default function HelpCenter() {
  const [tab, setTab] = useState("FAQ");
  const [faqTab, setTaqTab] = useState("General");
  const { setSearch, search } = useProgress();
  return (
    <div>
      <MainHeader
        title={
          <div className="flex py-2 items-center  gap-2 ">
            <Link href="/setting">
              <BsArrowLeft className="text-2xl" />
            </Link>
            <div className="font-bold text-xl">Help Center</div>
          </div>
        }
      />
      <div className="px-4">
        <div className="grid grid-cols-2 mb-4 ">
          <button
            onClick={() => setTab("FAQ")}
            className={
              tab == "FAQ"
                ? "border-b-2 border-[#6949ff] py-2 font-bold  text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b-2 font-bold border-[#9e9e9e]"
            }
          >
            FAQ
          </button>
          <button
            onClick={() => setTab("Contact us")}
            className={
              tab == "Contact us"
                ? "border-b-2 border-[#6949ff] py-2 font-bold  text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b-2 font-bold border-[#9e9e9e]"
            }
          >
            Contact us
          </button>
        </div>

        {tab === "FAQ" ? (
          <>
            <div className="flex justify-between gap-1 items-center my-4">
              <button
                onClick={() => setTaqTab("General")}
                className={
                  faqTab == "General"
                    ? "text-sm text-white rounded-full py-2 px-4 bg-[#6949ff]"
                    : "text-sm text-[#6949ff] rounded-full py-1 px-4 border font-bold border-[#6949ff]"
                }
              >
                General
              </button>
              <button
                onClick={() => setTaqTab("Account")}
                className={
                  faqTab == "Account"
                    ? "text-sm text-white rounded-full py-2 px-4 bg-[#6949ff]"
                    : "text-sm text-[#6949ff] rounded-full py-1 px-4 border font-bold border-[#6949ff]"
                }
              >
                Account
              </button>
              <button
                onClick={() => setTaqTab("Service")}
                className={
                  faqTab == "Service"
                    ? "text-sm text-white rounded-full py-2 px-4 bg-[#6949ff]"
                    : "text-sm text-[#6949ff] rounded-full py-1 px-4 border font-bold border-[#6949ff]"
                }
              >
                Service
              </button>
              <button
                onClick={() => setTaqTab("Quiz")}
                className={
                  faqTab == "Quiz"
                    ? "text-sm text-white rounded-full py-2 px-4 bg-[#6949ff]"
                    : "text-sm text-[#6949ff] rounded-full py-1 px-4 border font-bold border-[#6949ff]"
                }
              >
                Quiz
              </button>
            </div>

            <div className="relative mt-4 ">
              <CiSearch className="text-2xl absolute top-3 text-[#9e9b9b] left-3" />
              <input
                className="bg-[#f5f5f5] py-3 rounded-xl w-full px-10 outline-[#6949ff] "
                type="text"
                placeholder="Search "
                onChange={(e) => setSearch(e.target.value)}
              />
              <CiSliderHorizontal className="text-[#6949ff] absolute top-3 text-2xl right-6" />
            </div>
            {search ? (
              <div className="absolute bg-white border rounded-2xl shadow-2xl w-[92%] mt-2 p-4">
                <>
                  <div className="my-4">
                    {FAQItems.filter((i) => {
                      if (search === "") {
                        return i;
                      } else if (
                        i.question
                          .toLocaleLowerCase()
                          .includes(search.toLocaleLowerCase())
                      ) {
                        return i;
                      }
                    }).map((i) => {
                      return (
                        <div key={i.id}>
                          <div>{i.question}</div>
                          <hr className="my-2" />
                        </div>
                      );
                    })}
                  </div>
                </>
              </div>
            ) : null}
            <div className="my-4">
              {FAQItems.map((i) => {
                return <FAQCard value={i} key={i.id} />;
              })}
            </div>
          </>
        ) : null}

        {tab === "Contact us" ? (
          <>
            <div className="my-6">
              {ContactItems.map((i) => {
                return <Contact value={i} key={i.id} />;
              })}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
