import React from "react";

// import component
import HowWeHelpBussinessGrowCard from "../primitive/cards/HowWeHelpBussinessGrowCard";

// import mockdata
import howWeHelpBussinessGrowData from "../../mockdata/howWeHelpBussinessGrowData";

const HowWeHelpBussinessGrow = () => {
  return (
    <div className="relative py-8 md:py-16">
      <div className="container mx-auto my-6 md:my-16 space-x-4 md:space-y-16 relative z-10">
        <div className="text-center space-y-3 md:space-y-6">
          <h3 className="font-bold font-brown_regular text-2xl md:text-5xl">
            How we help your business grow
          </h3>
          <div className="flex justify-center">
            <p className="font-thin font-ttnormspro_extra_light text-xl md:max-w-xl text-MountainMist">
              Having developed smart solutions for numerous types of
              organizations, we know what matters most
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4  md:gap-y-6">
            <>
              {howWeHelpBussinessGrowData.map((card, index) => (
                <div key={index}>
                  <HowWeHelpBussinessGrowCard
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

export default HowWeHelpBussinessGrow;
