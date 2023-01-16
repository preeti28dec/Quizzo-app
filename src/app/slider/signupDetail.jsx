"use client";
import { useProgress } from "../../context/context";
import Header from "../header/header";
import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsGithub, BsCheckLg } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function SignupDetail() {
  const { setProgress } = useProgress();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [openModel, setOpenModel] = useState(false);

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };
  const handleSubmit = () => {
    if (passwordInput != passwordInput) {
      return toast.error("Invalid password");
    } else {
      setOpenModel(true);
      return null;
    }
  };

  return (
    <>
      <Header />
      <LoginPage1>
        <div>
          <div>
            <div className="m-4 text-2xl text-center font-bold">
              Create an account ✏️
            </div>
            <div className="mx-4 py-2 text-[#212121] text-center">
              Please enter your username. email address and password. If you
              forget it, then you have to do forgot password.
            </div>
          </div>
          <div className="mx-4">
            <div className="mt-6">
              <p className="font-bold text-sm">Full Name</p>
              <input
                className="input"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="enter your Name"
              />
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
            <div className="mt-6">
              <p  className="font-bold text-sm">Email</p>
              <input
                className="input"
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                type="text"
                placeholder="enter your email address"
              />
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
            <div className="mt-6">
              <p  className="font-bold text-sm">Password</p>
              <input
                className="input"
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                placeholder="Password"
              />
              <div className="eyeIcon" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <AiFillEyeInvisible className="text-2xl" />
                ) : (
                  <AiFillEye className="text-2xl" />
                )}
              </div>
            </div>
            <div className="flex gap-2  items-center mt-4">
              <input className="checkbox" type="checkbox" />
              <p>Remember me</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mx-4">
            <div className="my-6 h-[1px] bg-[#efefef] w-full"></div>
            <div className="font-bold"> or</div>
            <div className="my-6 h-[1px] bg-[#efefef] w-full"></div>
          </div>
          <div className="googleButton">
            <FcGoogle className="text-2xl" />
            <button>Continue with Google</button>
          </div>
          <div className="googleButton">
            <BsGithub className="text-2xl" />
            <button>Continue with Google</button>
          </div>
          <div
            className="sign-up"
            onClick={() => {
              setProgress("100%");
              handleSubmit();
            }}
          >
            <button>Continue</button>
          </div>
        </div>
        {openModel ? (
          <>
            <div
              onClick={() => setOpenModel((s) => !s)}
              className="left-0 h-[100vh] fixed z-10 w-[100%] top-0 bg-[#000000ad]"
            >
              <div className=" bg-white p-4 modelBox zoom-in-zoom-out">
                <div className="border rounded-full w-24 h-24 p-4 bg-[#795cff] mx-auto">
                  <FaUser className="m-auto mt-3 text-4xl text-center text-white" />
                </div>
                <div className="text-center mt-4 text-[18px] text-[#795cff] ">
                  successfully!
                </div>
                <p className="text-[14px] text-center mt-2">
                  Please wait moment, wee are preparing for you...
                </p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </LoginPage1>
    </>
  );
}
const LoginPage1 = styled.div`
  .circle {
    background-color: var(--blueColor);
    padding: 40px 50px;
    border-radius: 50%;
    margin-left: 45px;
    box-shadow: #543acc 10px 10px 40px;
  }
  .modelBox {
    position: absolute;
    border-radius: 20px;
    left: 15%;
    top: 30%;
    transform: translate(-50% -50%);
  }
  .zoom-in-zoom-out {
    width: 70%;
    height: 30%;
    animation: zoom-in-zoom-out 2s ease-out infinite;
  }
  /* infinite */

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .sign-up {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin: 55px 20px;
    border-radius: 50px;
    padding: 15px;
    color: var(--background);
    text-align: center;
    font-weight: 600;
  }

  input[type="checkbox"] {
    accent-color: var(--blueColor);
  }
  .input {
    border: 2px solid var(--blueColor);
    padding: 10px 5px ;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    outline: none;
    font-weight: 700;
  }
  p {
    font-size: 14px;
  }
  .eyeIcon {
    position: absolute;
    z-index: 10;
    margin-top: -30px;
    right: 0;
    margin-right: 30px;
    color: var(--blueColor);
  }
  .googleButton {
    box-shadow: #efefef 0px 5px 1px;
    margin: 30px 20px 10px 20px;
    border-radius: 10px;
    border: 1px solid #efefef;
    padding: 15px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`;
