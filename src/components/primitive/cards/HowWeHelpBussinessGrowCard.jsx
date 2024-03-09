import React from "react";

const HowWeHelpBussinessGrowCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3">
      <img src={icon} alt="" className="w-16 mb-3" />
      <h3 className="font-bold font-brown_regular md:text-[22px] md:leading-[1.75rem]">
        {title}
      </h3>
      <p className="font-ttnormspro_extra_light md:text-lg">{description}</p>
    </div>
  );
};

export default HowWeHelpBussinessGrowCard;
