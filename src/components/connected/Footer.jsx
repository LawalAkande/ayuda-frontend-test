import React from "react";
import { Link } from "react-router-dom";

import Ellipse from "../../assets/svgs/Ellipse6.svg";

const Footer = () => {
  return (
    <div className="relative px-8 md:px-24 py-16 md:py-40 bg-footer-bg-img bg-no-repeat bg-lef-bottom bg-100% md:bg-auto">
      <img
        src={Ellipse}
        className="hidden xl:flex xl:absolute xl:right-0 xl:top-28"
        alt=""
      />
      <div className="flex flex-col space-y-4 lg:space-y-0 md:flex-row ">
        <div className="w-full md:w-[60%]">
          <div className="grid grid-cols-2  gap-y-10 gap-x-44 w-full md:w-[50%]">
            <div className="space-y-4">
              <h3 className="text-white font-bold font-brown_regular text-xl md:text-2xl">
                Product
              </h3>
              <div className="flex flex-col space-y-2.5">
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Features
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  API
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Integration
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Features
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold font-brown_regular text-xl md:text-2xl">
                Resources
              </h3>
              <div className="flex flex-col space-y-2.5">
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Developer
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Status
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Security
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-bold font-brown_regular text-xl md:text-2xl">
                Company
              </h3>
              <div className="flex flex-col space-y-2.5">
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  About
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-bold font-brown_regular text-xl md:text-2xl">
                Help
              </h3>
              <div className="flex flex-col space-y-2.5">
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Use cases
                </Link>
                <Link to="" className="text-white font-ttnormspro_extra_light">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%]">
          <div className="space-y-4">
            <h3 className="font-bold font-brown_regular text-xl md:text-2xl">
              Get in touch
            </h3>
            <div className="flex flex-col space-y-16">
              <div className="space-y-4">
                <p className="font-bold font-brown_regular text-2xl md:text-3xl">
                  +234 (08)86 300
                </p>
                <p className="text-xs md:text-sm text-BattleshipGrey">
                  Weekdays 8.00 - 16.00
                </p>
                <p className="text-Scampi font-ttnormspro_extra_light">
                  support@ayuda.ng
                </p>
              </div>
              <p className="text-BattleshipGrey font-ttnormspro_extra_light">
                Copyright 2020 @ayuda. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
