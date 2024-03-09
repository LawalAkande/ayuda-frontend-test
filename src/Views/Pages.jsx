import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import ErrorPage from "./ErrorPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/singup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Pages;
