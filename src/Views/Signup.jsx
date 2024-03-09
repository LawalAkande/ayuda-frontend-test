import React, { useState } from "react";

import logo from "../assets/svgs/colored-logo.svg";
import { Link } from "react-router-dom";

import at from "../assets/svgs/at.svg";
import eye_icon from "../assets/svgs/password_eye.svg";
import auth_bg_img2 from "../assets/svgs/auth-bg-img2.svg";
import auth_bg_img1 from "../assets/svgs/auth-bg-img1.svg";

import Button from "../components/primitive/buttons/Button";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-y-scroll">
      <img
        src={auth_bg_img1}
        className="w-28 sm:w-44 md:w-64 xl:w-auto absolute bottom-0 left-0"
        alt=""
      />
      <img
        src={auth_bg_img2}
        className="w-28 sm:w-44 md:w-64 xl:w-auto absolute top-20 right-0"
        alt=""
      />
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="space-y-1.5 md:space-y-3">
        <h3 className="font-bold font-brown_regular text-2xl md:text-4xl">
          Sign Up
        </h3>
        <p className="font-ttnormspro_extra_light md:text-lg pb-6">
          Already have an account yet?{" "}
          <Link to="/signin" className="text-PersianGreen">
            Sign in
          </Link>
        </p>

        <div className="space-y-4">
          <div>
            <input
              class="font-ttnormspro_light text-sm w-full border-b-[0.1px] border-MountainMist text-MountainMist focus:outline-none focus:border-MountainMist focus:ring-0 py-4"
              type="text"
              name="fullName"
              placeholder="Full Name"
            />
          </div>

          <div>
            <input
              class="appearance-none font-ttnormspro_light text-sm w-full border-b-[0.1px] border-MountainMist text-MountainMist focus:outline-none focus:border-MountainMist focus:ring-0 py-4"
              type="number"
              name="fullName"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <div className="flex justify-between items-center pt-4 w-full">
              <input
                class="font-ttnormspro_light text-sm w-full border-b-[0.1px] border-MountainMist text-MountainMist focus:outline-none focus:border-MountainMist focus:ring-0 py-4"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div
                className="cursor-pointer relative"
                onClick={togglePasswordVisibility}
              >
                <img src={at} alt="eye icon" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center pt-4 w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="font-ttnormspro_light text-sm w-full border-b-[0.1px] border-MountainMist text-MountainMist focus:outline-none focus:border-MountainMist focus:ring-0 py-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className={`cursor-pointer relative ${
                  !showPassword &&
                  "before:absolute before:w-full before:h-[1px] before:bg-MountainMist before:top-1/2 before:-translate-y-1/2 before:left-0 before:rotate-45"
                }`}
                onClick={togglePasswordVisibility}
              >
                <img src={eye_icon} alt="eye icon" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center pt-4 w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Confirm Password"
                className="font-ttnormspro_light text-sm w-full border-b-[0.1px] border-MountainMist text-MountainMist focus:outline-none focus:border-MountainMist focus:ring-0 py-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className={`cursor-pointer relative ${
                  !showPassword &&
                  "before:absolute before:w-full before:h-[1px] before:bg-MountainMist before:top-1/2 before:-translate-y-1/2 before:left-0 before:rotate-45"
                }`}
                onClick={togglePasswordVisibility}
              >
                <img src={eye_icon} alt="eye icon" />
              </div>
            </div>
          </div>
          <div className="pt-8">
            <div>
              <Button
                to=""
                title="sign up"
                className="w-full bg-PersianGreen text-white px-4 md:px-8 py-3 rounded-md"
                arrow=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
