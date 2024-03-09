import React from "react";

// import component
import SupportCustomerCard from "../primitive/cards/SupportCustomerCard";

// import mockdata
import suportCustomerData from "../../mockdata/suportCustomerData";

// import svg
import ellipse from "../../assets/svgs/Ellipse4.svg";

const SupportCustomers = () => {
  return (
    <div className="relative ">
      <img src={ellipse} className="hidden lg:absolute md:-bottom-20" alt="" />
      <div className="container mx-auto my-6 md:my-16 space-x-4 md:space-y-16 relative z-10">
        <div className="text-center space-y-3 md:space-y-6">
          <h3 className="font-bold font-brown_regular text-2xl md:text-5xl">
            The software that supports customers
          </h3>
          <div className="flex justify-center">
            <p className="font-thin font-ttnormspro_extra_light text-xl md:max-w-xl text-MountainMist">
              Our helpdesk system covers everything from user management to CMDB
              management to knowledge bases and more.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4  md:gap-y-6">
            <>
              {suportCustomerData.map((card, index) => (
                <div key={index}>
                  <SupportCustomerCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCustomers;
