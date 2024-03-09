import React from "react";

// import compoenent
import Button from "../primitive/buttons/Button";

const GetImpactfulConversation = () => {
  return (
    <div className="container mx-auto my-4 md:my-16">
      <div className="text-center space-y-3 md:space-y-12">
        <div className="flex items-center justify-center">
          <h3 className="font-bold font-brown_regular leading-[5rem] text-2xl md:text-5xl max-w-4xl">
            Ready to have more impactful conversations?
          </h3>
        </div>
        <p className="text-center font-thin font-ttnormspro_extra_light text-xl text-MountainMist">
          Be up and running in just a few minutes !
        </p>
        <div className="flex items-center justify-center">
          <Button
            to=""
            title="Book a Demo"
            className="bg-Salmon text-white px-4 md:px-8 py-3 rounded-3xl"
            arrow=""
          />
        </div>
      </div>
    </div>
  );
};

export default GetImpactfulConversation;
