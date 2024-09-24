"use client";

import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import Launch from "../../../components/technology/Launch";
import Spaceport from "../../../components/technology/Spaceport";
import Space from "../../../components/technology/Space";

const Technology: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("Launch");

  const renderView = () => {
    switch (activeView) {
      case "Launch":
        return <Launch activeView={activeView} setActiveView={setActiveView} />;
      case "Spaceport":
        return <Spaceport activeView={activeView} setActiveView={setActiveView} />;
      case "Space":
        return <Space activeView={activeView} setActiveView={setActiveView} />;
      default: 
        return <Launch activeView={activeView} setActiveView={setActiveView} />;
    }
  };
  return (
    <div className="xl:bg-Technology-Desktop xl:bg-center xl:h-screen xl:bg-cover lg:bg-Technology-Tablet lg:bg-center lg:h-[1100px] lg:bg-cover md:bg-Technology-Tablet md:bg-center md:h-max md:bg-cover  sm:bg-Technology-Mobile sm:bg-center sm:h-max sm:bg-cover xm:bg-Technology-Mobile xm:bg-center xm:h-max xm:bg-cover mx:bg-Technology-Mobile mx:bg-center mx:h-max mx:bg-cover">
      <div className="overflow-x-hidden">
        <div className="xm:-ml-14 sm:-ml-12 mx:-ml-14 md:ml-0 lg:ml-0 xl:ml-0">
          <NavBar />
        </div>
        <main className="xl:p-2 mx:-ml-3">
          {/* Text Heading */}
          <div className="xl:w-[357px] xl:h-[34px] xl:ml-52  xl:-mt-0 md:ml-24 md:mt-5 lg:ml-24 lg:mt-4 mx:-mt-12 mx:ml-28 sm:-mt-14 sm:ml-24 xm:ml-28 xm:-mt-14">
            <h2 className="text-Line text-xl font-semibold">
              03{" "}
              <span className="text-white font-medium">SPACE LAUNCH 101</span>
            </h2>
          </div>
          {/* Technology Page */}
          <div className="mx:-ml-2 xm:-ml-2 sm:-ml-2 xl:-ml-0 lg:-ml-0 md:-ml-0">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Technology;
