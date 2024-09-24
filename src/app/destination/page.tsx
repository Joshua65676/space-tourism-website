"use client";

import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import Moon from "../../../components/destination/Moon";
import Mars from "../../../components/destination/Mars";
import Europa from "../../../components/destination/Europa";
import Titan from "../../../components/destination/Titan";

const Destination: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("Moon");

  const renderView = () => {
    switch (activeView) {
      case "Moon":
        return <Moon activeView={activeView} setActiveView={setActiveView} />;
      case "Mars":
        return <Mars activeView={activeView} setActiveView={setActiveView} />;
      case "Europa":
        return <Europa activeView={activeView} setActiveView={setActiveView} />;
      case "Titan":
        return <Titan activeView={activeView} setActiveView={setActiveView} />;
      default:
        return <Moon activeView={activeView} setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="xl:bg-Destination-Desktop xl:bg-center xl:h-screen xl:bg-cover lg:bg-Destination-Tablet lg:bg-center lg:h-[1100px] lg:bg-cover md:bg-Destination-Tablet md:bg-center md:h-max md:bg-cover  sm:bg-Destination-Moblie sm:bg-center sm:h-max sm:bg-cover xm:bg-Destination-Moblie xm:bg-center xm:h-max xm:bg-cover mx:bg-Destination-Moblie mx:bg-center mx:h-max mx:bg-cover">
      <div className="overflow-x-hidden">
        <div className="xm:-ml-14 sm:-ml-12 mx:-ml-14 md:ml-0 lg:ml-0 xl:ml-0">
          <NavBar />
        </div>
        <main className="xl:p-2 mx:-ml-3">
          {/* Text Heading */}
          <div className="xl:w-[357px] xl:h-[34px] xl:ml-48  xl:-mt-0 md:ml-20 md:mt-5 lg:ml-20 lg:mt-5 mx:-mt-12 mx:ml-20 sm:-mt-14 sm:ml-24 xm:ml-24 xm:-mt-14">
            <h2 className="text-Line text-xl font-semibold">
              01{" "}
              <span className="text-white font-medium">
                PICK YOUR DESTINATION
              </span>
            </h2>
          </div>
          {/* Moon Page */}
          <div className="mx:-ml-2 xm:-ml-2 sm:-ml-2 xl:-ml-0 lg:-ml-0 md:-ml-0">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Destination;
