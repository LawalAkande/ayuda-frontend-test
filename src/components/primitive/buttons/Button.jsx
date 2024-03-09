import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, title, className, arrow }) => {
  return (
    <div>
      <Link
        to={to}
        className={`${className} px-4 py-1.5 w-fit flex items-center justify-center rounded-3xl space-x-3 transition-all duration-500`}
      >
        <span>{title}</span>
        <img
          src={arrow}
          className="pt-0.5 transition-all transition_duration"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Button;
