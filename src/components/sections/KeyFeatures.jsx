import React from "react";

// import svg
import ellipse from "../../assets/svgs/Ellipse3.svg";

// import mockdata
import keyFeaturesSideData from "../../mockdata/keyFeaturesSideData";
import keyFeatureWorkFlowList from "../../mockdata/keyFeatureWorkFlowList";
import Button from "../primitive/buttons/Button";

const KeyFeatures = () => {
  return (
    <div className="relative py-8 md:py-20">
      <img src={ellipse} className="hidden lg:absolute md:right-0 md:top-0" alt="" />

      <div className="container mx-auto ">
        <div className="text-center space-y-3 md:space-y-6 mb-10">
          <h3 className="font-bold font-brown_regular text-2xl md:text-5xl">
            Key Features
          </h3>
          <div className="flex justify-center">
            <p className="font-thin font-ttnormspro_extra_light text-xl md:max-w-xl text-MountainMist">
              Numerous features make it possible to customize the system in
              accordance with all your needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-start">
          <div className="w-full lg:w-4/12 flex flex-col space-y-8 lg:pt-16">
            {keyFeaturesSideData.map((data, index) => (
              <div key={index} className="flex flex-col ">
                <div className="flex items-center space-x-3">
                  <div className="w-12">
                    <img src={data.svg} alt="" />
                  </div>
                  <div>
                    <p className="font-bold font-brown_regular text-xl text-MountainMist">
                      {data.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-8/12">
            <div className="lg:border-l border-l-CottonSeed lg:pl-16">
              <div className="space-y-3 md:space-y-6">
                <h3 className="font-bold font-brown_regular text-2xl md:text-4xl">
                  Spotlessly optimized work flows
                </h3>
                <div className="flex justify-center">
                  <p className="font-thin font-ttnormspro_extra_light md:text-lg text-MountainMist">
                    A good ITSM tool should not burn a hole in your pocket. With
                    ayuda, all you need to do is, sign-up, choose the plan that
                    is right for you and we'll set it up for you, for free.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-2 md:gap-y-2">
                  {keyFeatureWorkFlowList.map((data, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img src={data.icon} alt="" />
                      <p className="font-thin font-ttnormspro_extra_light text-sm md:text-base">
                        {data.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start">
                  <div className="flex items-center space-x-4">
                    <Button
                      to=""
                      title="Book a Demo"
                      className="bg-PersianGreen text-white px-4 md:px-8 py-3 rounded-3xl"
                      arrow=""
                    />
                    <Button
                      to=""
                      title="Watch the video"
                      className=" text-SoftBlue hover:underline transition-all duration-1000"
                      arrow=""
                    />
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
