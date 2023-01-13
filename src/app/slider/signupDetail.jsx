"use client";
import { useProgress } from "../../context/context";
import Header from "../header";
import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";

export default function SignupDetail() {
  const { setProgress } = useProgress();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

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

  return (
    <>
      <Header />
      <LoginPage1>
        <div>
          <div>
            <div className="m-4 text-2xl text-center font-semibold">
              Create an account
            </div>
            <div className="text-sm py-2 text-[#212121] text-center">
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
              <p>Email</p>
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
              <p>Password</p>
              <input
                className="input"
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="form-control"
                placeholder="Password"
              />
              <div className="eyeIcon" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <AiFillEyeInvisible />
                ) : (
                  <AiFillEye />
                )}
              </div>
            </div>
          <div className="flex gap-2 items-center mt-4">
            <input className="checkbox" type="checkbox" />
            <p>Remember me</p>
          </div>
          </div>
          <hr className="mt-6" />

          <div className="sign-up" onClick={() => setProgress("100%")}>
            <button>Sign In</button>
          </div>
        </div>
      </LoginPage1>
    </>
  );
}
const LoginPage1 = styled.div`
  .sign-up {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin: 55px 20px;
    border-radius: 50px;
    padding: 10px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
  }

  input[type="checkbox"] {
    accent-color: var(--blueColor);
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
`;
