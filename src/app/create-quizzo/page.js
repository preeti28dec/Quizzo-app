"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowLeft, BsImageFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { CreateQuizItem } from "../../utils/data";
import MainHeader from "../header/mainHeader";
import DarkButton from "../../componets/button/DarkButton";
import LightButton from "../../componets/button/LightButton";
import { AiOutlineDelete, AiOutlineEye, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineDuplicate } from "react-icons/hi";
import {TbFileDownload} from 'react-icons/tb'

function CreateQuizzo() {
  const [file, setFile] = useState();
  const [openModel, setOpenModel] = useState(false);
  const [massesgePopup, setMassesgePopup] = useState(false);
  const router = useRouter();

  const handelFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <MainHeader
        title={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/home">
                <div>
                  <BsArrowLeft className="text-2xl" />
                </div>
              </Link>
              <div className="font-bold text-[20px]">Create Quizz</div>
            </div>
            <AiOutlineMessage
              className="text-2xl"
              onClick={() => setMassesgePopup((s) => !s)}
            />
          </div>
        }
      />
      <CreateQuizzo1 className="px-4">
        {massesgePopup ? (
          <>
            <div className=" absolute top-[50px] p-6 font-bold z-10 rounded-lg  bg-white shadow-2xl  right-3 ">
              <div className="flex items-center gap-2 my-2 hover:text-#f75555">
                <AiOutlineEye className="text-2xl" />
                <div>Preview</div>
              </div>
              <hr/>
              <div className="flex items-center gap-2 my-2 hover:text-#f75555">
                <HiOutlineDuplicate className="text-2xl" />
                <div>Duplicate Question</div>
              </div>
              <hr/>
              <div className="flex items-center gap-2 my-2 hover:text-#f75555">
                <TbFileDownload className="text-2xl" />
                <div>Save</div>
              </div>
              <hr/>
              <div className="flex items-center gap-2 my-2 hover:text-#f75555">
                <AiOutlineDelete className="text-2xl" />
                <div>Delete</div>
              </div>
            </div>
          </>
        ) : null}
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
        <div>
          <div className="mt-10">
            <p>Title</p>
            <input
              className="input font-bold"
              id="message"
              name="message"
              type="text"
              placeholder="enter your email address"
            />
          </div>

          <div className="mt-10">
            <p>Description</p>
            <input
              className="input font-bold"
              id="message"
              name="message"
              type="text"
              placeholder="enter your email address"
            />
          </div>
          <div className="mt-10">
            <p>Select Collection</p>
            <select className="font-bold">
              <option>Eduction</option>
              <option>Food</option>
              <option>Music</option>
              <option>Saving</option>
              <option>Business</option>
              <option>Motivation</option>
            </select>
          </div>

          <div className="mt-10">
            <p>Select Theme</p>
            <select className="font-bold">
              <option>Quizoo Default</option>
              <option>None</option>
            </select>
          </div>

          <div className="mt-10">
            <p>Visible to</p>
            <select className="font-bold">
              <option>Only Me</option>
              <option>Friends of Friends</option>
              <option>Public</option>
            </select>
          </div>

          <div className="mt-10">
            <p>Visible to Quiz Questions</p>
            <select className="font-bold">
              <option>Only Me</option>
              <option>Friends of Friends</option>
              <option>Public</option>
            </select>
          </div>

          <div className="mt-10">
            <p>Keywords</p>
            <input
              className="input font-bold"
              id="message"
              name="message"
              type="text"
              placeholder="ex: learning, games, school"
            />
          </div>
          <div className="flex items-center gap-2 my-4 justify-center">
            <Link href="/home">
              <LightButton title="Save" />
            </Link>
            <div className="" onClick={() => setOpenModel((s) => !s)}>
              <DarkButton title="Add Question" />
            </div>
          </div>
        </div>

        {openModel ? (
          <>
            <div
              onClick={() => setOpenModel((s) => !s)}
              className="left-0 h-[100%] fixed z-10 w-[100%] bottom-0 bg-[#000000ad]"
            >
              <div className="w-full bottom-0 absolute  bg-white rounded-t-3xl p-2 modelBox ">
                <hr className="w-8 mx-auto" />
                <div className="text-center font-bold text-xl py-4">
                  Add Question
                </div>
                <hr />
                <div className="grid grid-cols-2  gap-4 mt-4">
                  {CreateQuizItem.map((i) => {
                    return (
                      <div
                        onClick={() => {
                          router.push(`${i.link_}?id=${i.id}`);
                        }}
                        key={i.icon}
                        className="border rounded-xl bg-[#fafafa] py-6"
                      >
                        <div
                          className={`flex justify-center text-[2.5rem] ${i.color_}`}
                        >
                          {i.icon}
                        </div>
                        <div className="flex justify-center mt-2 font-bold text-[18px]">
                          {i.icon_name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </CreateQuizzo1>
    </>
  );
}
export default CreateQuizzo;
const CreateQuizzo1 = styled.div`
  padding-bottom: 60px;
  .modelBox {
    position: absolute;
    border-radius: 40px 40px 0px 0px;
    left: 0%;
    top: 35%;
    transform: translate(-50% -50%);
  }
  .card-image {
    width: 350px;
    position: absolute;
    left: 0px;
    top: -3px;
    z-index: -10;
  }
  .header {
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
  }

  .input {
    border: 2px solid var(--blueColor);
    padding: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    outline: none;
  }
  select {
    border: 2px solid var(--blueColor);
    padding: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    outline: none;
  }
  p {
    font-size: 16px;
    font-weight: 700;
  }
`;
