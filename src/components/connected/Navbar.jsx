import React from "react";
import { Link } from "react-router-dom";

//import images
import ayuda_white_logo from "../../assets/svgs/ayuda-white-logo.svg";

//import components
import Button from "../primitive/buttons/Button";

const Navbar = () => {
  const navLinks = [
    { to: "", text: "Product" },
    { to: "", text: "Pricing" },
    { to: "", text: "Features" },
    { to: "", text: "Pricing" },
    { to: "", text: "Book a Demo" },
    { to: "", text: "FAQ" },
  ];
  return (
    <div>
      <nav className="flex flex-row items-center justify-between py-4 px-8 lg:py-8 lg:px-16">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={ayuda_white_logo} alt="" />
          </Link>
          <div className="hidden xl:flex flex-row items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className="text-white">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden xl:flex flex-row items-center space-x-4">
          <Button to="/signin" title="Log in" className="text-white" arrow="" />
          <Button
            to="/signup"
            title="Sign up"
            className="text-white border border-white px-4 md:px-8 py-3 rounded-3xl"
            arrow=""
          />
        </div>
        <div className="block xl:hidden">
          <div class="flex flex-col space-y-2 justify-center items-center cursor-pointer w-fit transition-all duration-500">
            <span class="w-8 h-[2px] bg-white"></span>
            <span class="w-8 h-[2px] bg-white"></span>
            <span class="w-8 h-[2px] bg-white"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
