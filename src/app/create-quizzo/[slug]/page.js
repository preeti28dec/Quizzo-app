"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState, useEffect} from "react";
import { BsImageFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import ModelBox from "../../../componets/model-box/modelBox";
import {
  BoolenQuiz,
  CreateQuizItem,
  QuizzAddAnswer,
} from "../../../utils/data";
import MainHeader from "../../header/mainHeader";
import BoolenCard from "./BoolenCard";
import CheckboxCard from "./Checkbox";
import TypeAnswereCard from "./typeAnswer";
import QuizCard from "./QuizCard";

const timeArray = [
  { id: 1, time: "5 sec" },
  { id: 2, time: "10 sec" },
  { id: 3, time: "20 sec" },
  { id: 4, time: "30 sec" },
  { id: 5, time: "45 sec" },
  { id: 6, time: "60 sec" },
  { id: 7, time: "90 sec" },
  { id: 8, time: "120 sec" },
];

const pointArray = [
  { id: 1, time: "50 pt" },
  { id: 2, time: "100 pt" },
  { id: 3, time: "200 pt" },
  { id: 4, time: "250 pt" },
  { id: 5, time: "500 pt" },
  { id: 6, time: "750 pt" },
  { id: 7, time: "1000 pt" },
  { id: 8, time: "2000 pt" },
];

function QuizzCreate() {
  const query = useSearchParams();
  const [data, setData] = useState({});
  const [activeTime, setActiveTime] = useState(false);
  const [activePoint, setActivePoint] = useState(false);
  const [valueTime, setValueTime] = useState("10 sec");
  const [valuePoint, setValuePoint] = useState("100 pt");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState();
  const router = useRouter();
  const handelFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setData(CreateQuizItem.filter((i) => i.id == query.get("id"))[0]);
    setStatus(data?.icon_name);
  }, [query, data]);
  console.log("query", status);
  return (
    <>
      <MainHeader
        title={
          <div className="flex items-center gap-2">
            <Link href="/create-quizzo">
              <div>
                <IoClose className="text-2xl" />
              </div>
            </Link>
            <div className="font-bold text-[20px]">Create Quizzo</div>
          </div>
        }
      />
      <QuizzCreate1 className="px-4">
        <div className="border-2  border-[#8166ff] overflow-hidden  rounded-2xl h-60 relative">
          <label onChange={handelFile} htmlFor="formId">
            <input type="file" id="formId" hidden />
            <div className="text-[#8166ff] text-[30px] flex justify-center mt-24">
              <BsImageFill onChange={handelFile} />
            </div>
            <p className="text-[#8166ff] text-center mt-4 font-bold text-[18px]">
              Add Cover Image
            </p>
          </label>

          <img className="h-60 card-image" src={file} />
        </div>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <button
                className="createBtn"
                onClick={() => setActiveTime((s) => !s)}
              >
                {valueTime}
              </button>
              <button
                className="createBtn"
                onClick={() => setActivePoint((k) => !k)}
              >
                {valuePoint}
              </button>
            </div>
          </div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>{data?.icon_name}</option>
            {CreateQuizItem.map((i, ind) => {
              return (
                <option
                  key={ind}
                  value={i.icon_name}
                  onClick={() => {
                    router.push(`${i.link_}?id=${i.id}`);
                  }}
                >
                  {i.icon_name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <input
            className="input font-bold outline-[#8166ff]"
            type="text"
            placeholder="Tap to add question"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {status == "True or False" ? (
            <>
              {BoolenQuiz.map((i) => {
                return <BoolenCard key={i.text} value={i} />;
              })}
            </>
          ) : null}
          {status == "Quiz" ? (
            <>
              {QuizzAddAnswer.map((i) => {
                return <QuizCard key={i.text} value={i} />;
              })}
            </>
          ) : null}
          {status == "Puzzle" ? (
            <>
              {QuizzAddAnswer.map((i) => {
                return <QuizCard key={i.text} value={i} />;
              })}
            </>
          ) : null}
        </div>
        <div className="my-2 ">
          {status == "Type Answer" ? (
            <>
              <TypeAnswereCard />
            </>
          ) : null}
        </div>

        <div className="grid grid-row-4 gap-4 ">
          {status == "Checkbox" ? (
            <>
              {QuizzAddAnswer.map((i) => {
                return <CheckboxCard key={i.text} value={i} />;
              })}
            </>
          ) : null}
        </div>
        <hr className="mt-10" />
        <div className="flex justify-between">
          <div className="flex items-start border-2 rounded-xl bg-[#f4f4f4] border-[#8166ff] w-16 h-12 overflow-hidden  mt-5">
            <div className="bg-[#8166ff] px-2 box-css">1</div>
          </div>
          <button className="btn text-[20px]">+</button>
        </div>

        {activeTime ? (
          <ModelBox
            title={
              <div>
                <div className="font-bold text-[20px] text-center">
                  Time Limit
                </div>
                <hr className="mt-4" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {timeArray.map((i) => {
                    return (
                      <div key={i.id}>
                        <div
                          onClick={() => setValueTime(i.time)}
                          className={
                            valueTime === i.time ? "activebtn" : "Notactivebtn"
                          }
                        >
                          {i.time}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="OkBtn mt-10"
                  onClick={() => setActiveTime((s) => !s)}
                >
                  Ok
                </div>
              </div>
            }
          />
        ) : null}

        {activePoint ? (
          <ModelBox
            title={
              <div>
                <div className="font-bold text-[20px] text-center">
                  Point Limit
                </div>
                <hr className="mt-4" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {pointArray.map((i) => {
                    return (
                      <div key={i.id}>
                        <div
                          onClick={() => setValuePoint(i.time)}
                          className={
                            valuePoint === i.time ? "activebtn" : "Notactivebtn"
                          }
                        >
                          {i.time}{" "}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="OkBtn mt-10"
                  onClick={() => setActivePoint((s) => !s)}
                >
                  Ok
                </div>
              </div>
            }
          />
        ) : null}
      </QuizzCreate1>
    </>
  );
}

export default QuizzCreate;
const QuizzCreate1 = styled.div`
  padding-bottom: 60px;
  .Notactivebtn {
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: #e2e2e3 0px 5px 0px;
    padding: 8px;
  }
  .activebtn {
    background-color: #543acc;
    box-shadow: #543acc 0px 5px 0px;
    color: var(--whiteColor);
    border-radius: 8px;
    padding: 8px;
  }
  .box-css {
    border-radius: 0px 0px 10px 0px;
  }
  .btn {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 6px 20px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 800;
  }
  .OkBtn {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    color: var(--whiteColor);
    padding: 10px 40px;
    border-radius: 30px;
  }

  .createBtn {
    background-color: var(--blueColor);
    margin-top: 20px;
    border-radius: 50px;
    padding: 8px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
    font-size: 14px;
  }

  .header {
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
  }

  .input {
    border: 2px solid #f6f6f7;
    background-color: #f9f9fa;
    padding: 25px;
    margin-top: 30px;
    border-radius: 10px;
    width: 100%;
    outline-color: #543acc;
  }

  select {
    border: 2px solid var(--blueColor);
    color: var(--blueColor);
    font-weight: 600;
    margin-top: 20px;
    border-radius: 20px;
    padding: 6px 10px;
    outline: none;
  }
  p {
    font-size: 16px;
    font-weight: 700;
  }
`;
