"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import MainHeader from "../header/mainHeader";

function ImageCollection() {
  const [file, setFile] = useState();
  const handelFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <ImageCollection1>
      <MainHeader
        title={
          <div className="flex gap-4 items-center ">
            <Link href="/home">
              <div>
                <IoClose className="text-2xl" />
              </div>
            </Link>
            <div className="font-bold text-xl">Create New Collection</div>
          </div>
        }
      />
      <div className="border-2 mx-4 mt-4 border-[#8166ff] overflow-hidden  rounded-2xl h-[200px] relative">
        <label onChange={handelFile} className="relative z-10" htmlFor="formId">
          <input type="file" id="formId" hidden />
          <div className="text-[#8166ff] text-[30px] flex justify-center mt-14">
            <BsImageFill onChange={handelFile} />
          </div>
          <p className="text-[#8166ff] text-center mt-4 font-bold text-[18px]">
            Add Cover Image
          </p>
        </label>
        <Image
          src={file}
          className="h-60 card-image -z-1 "
          alt="loding logo"
          width={500}
          height={500}
        />
      </div>
      <div className="px-4">
        <div className="mt-10">
          <p>Title</p>
          <input
            className="input font-bold"
            id="message"
            name="message"
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mt-10">
          <p>Visible to</p>
          <select className="font-bold">
            <option>Only Me</option>
            <option>Friends of Friends</option>
            <option>Public</option>
          </select>
        </div>
        <hr />
        <Link href="/home">
          <div className="createBtn">
            <button>Create</button>
          </div>
        </Link>
      </div>
    </ImageCollection1>
  );
}

export default ImageCollection;
const ImageCollection1 = styled.div`
  padding-bottom: 60px;
  .card-image {
    width: 350px;
    position: absolute;
    left: 0px;
    top: -3px;
    object-fit: contain;
  }

  .createBtn {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin: 40px 20px;
    border-radius: 50px;
    padding: 10px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
  }
  .header {
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
  }

  .input {
    border: 2px solid var(--blueColor);
    padding: 10px 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    outline: none;
  }
  select {
    border: 2px solid var(--blueColor);
    padding: 10px 0px;
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
