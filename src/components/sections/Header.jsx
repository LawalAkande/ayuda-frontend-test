import React from "react";

// import components
import Navbar from "../connected/Navbar";
import Button from "../primitive/buttons/Button";

// import images
import header_img from "../../assets/images/header-img.png";

const Header = () => {
  return (
    <div className="h-screen bg-header-one bg-no-repeat bg-let-top bg-60% md:bg-auto ">
      <div className="bg-header-tw bg-no-repeat bg-right-top bg-16 md:bg-auto">
        <Navbar />
        <div className="container mx-auto">
          <div className="flex flex-col space-y-4 md:space-y-28 lg:space-y-0 lg:flex-row lg:space-x-10  py-4 lg:py-16">
            <div className="w-full lg:w-[55%]  space-y-5 lg:space-y-8">
              <h3 className="text-white font-brown_regular flex flex-col space-y-2.5 lg:space-y-5 text-2xl lg:text-6xl font-bold tracking-wider text-center lg:text-left">
                <span>Improve</span> <span>customer</span>{" "}
                <span>service today</span>
              </h3>
              <div className="flex justify-center xl:justify-start">
                <p className="text-white text-sm text-center xl:text-left lg:text-lg max-w-md">
                  Simple , User-Friendly Ticket Management Solution developed
                  for collaboration and effective Service Delivery.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center space-x-4">
                  <Button
                    to=""
                    title="Book a Demo"
                    className="bg-Salmon text-white px-4 md:px-8 py-3 rounded-3xl"
                    arrow=""
                  />
                  <Button
                    to=""
                    title="Watch the video"
                    className="text-white hover:underline transition-all duration-1000"
                    arrow=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center">
              <img src={header_img} alt="" className="lg:scale-150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
