"use client";
import { useProgress } from "../../context/context";
import Header from "../header/header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsChevronDown } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import DarkButton from "../../componets/button/DarkButton";
import BlueButton from "../../componets/button/BlueButton";

export default function ProfileDetail() {
  const { setProgress } = useProgress();
  const [DOB, setDOB] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setName(event.target.value);
  };

  return (
    <>
      <Header title={<BsArrowLeft className="text-2xl" />} />
      <LoginPage1>
        <div>
          <div>
            <div className="m-4 text-2xl text-center font-bold">
              Create an account ✏️
            </div>
            <div className="mx-4 py-2 text-[#212121] text-center">
              Please complete your profile. Do not worry, your data will remain
              private and only you can see it.
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
                onChange={handleChange}
                type="text"
                placeholder="enter your Name"
              />
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
            <div className="mt-6">
              <p className="font-bold text-sm">Date of Birth</p>

              <input
                className="input"
                id="dob"
                name="dob"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                type="date"
                placeholder="enter your Name"
              />

              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
            <div className="mt-6">
              <p className="font-bold text-sm">Phone Number</p>
              <input
                className="input"
                id="phone"
                name="phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="enter your Name"
              />
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
            <div className="mt-6">
              <p className="font-bold text-sm">Country</p>
              <div className="relative">
                <input
                  className="input"
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="enter your Country name"
                />
                <BsChevronDown className="absolute top-0 right-0 mt-4 text-[#543acc]" />
              </div>
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
            <div className="mt-6">
              <p className="font-bold text-sm">Age</p>
              <div className="relative">
                <input
                  className="input"
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  placeholder="enter your age name"
                />
                <BsChevronDown className="absolute top-0 right-0 mt-4 text-[#543acc]" />
              </div>
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </div>
          </div>
          <hr className="mt-6" />
          <BlueButton>
            <button onClick={() => setProgress("100%")}>Continue</button>
          </BlueButton>
        </div>
      </LoginPage1>
    </>
  );
}

const LoginPage1 = styled.div`

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
    font-weight: 700;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    filter: invert(1);
    background-color: yellowgreen;
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
