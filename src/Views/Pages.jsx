import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import ErrorPage from "./ErrorPage";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Pages = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Improve customer service today | Ayuda</title>
              </Helmet>
              <Home />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Helmet>
                <title>Sign in | Ayuda</title>
              </Helmet>
              <Signin />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Helmet>
                <title>Sign up | Ayuda</title>
              </Helmet>
              <Signup />
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HelmetProvider>
  );
};

export default Pages;
