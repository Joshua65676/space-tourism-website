"use client";

import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import Douglas from "../../../components/crew/Douglas";
import Mark from "../../../components/crew/Mark";
import Victor from "../../../components/crew/Victor";
import Anousheh from "../../../components/crew/Anousheh";

const Crew: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("Douglas");

  const renderView = () => {
    switch (activeView) {
      case "Douglas":
        return (
          <Douglas activeView={activeView} setActiveView={setActiveView} />
        );
      case "Mark":
        return <Mark activeView={activeView} setActiveView={setActiveView} />;
      case 'Victor':
        return <Victor activeView={activeView} setActiveView={setActiveView} />;
      case 'Anousheh':
        return <Anousheh activeView={activeView} setActiveView={setActiveView} />;
      default:
        return (
          <Douglas activeView={activeView} setActiveView={setActiveView} />
        );
    }
  };

  return (
    <div className="xl:bg-Crew-Desktop xl:bg-center xl:h-screen xl:bg-cover lg:bg-Crew-Tablet lg:bg-center lg:h-[1100px] lg:bg-cover md:bg-Crew-Tablet md:bg-center md:h-max md:bg-cover  sm:bg-Crew-Moblie sm:bg-center sm:h-max sm:bg-cover xm:bg-Crew-Moblie xm:bg-center xm:h-max xm:bg-cover mx:bg-Crew-Moblie mx:bg-center mx:h-max mx:bg-cover">
      <div className="overflow-x-hidden">
        <div className="xm:-ml-14 sm:-ml-12 mx:-ml-14 md:ml-0 lg:ml-0 xl:ml-0">
          <NavBar />
        </div>
        <main className="xl:p-2 mx:-ml-3">
          {/* Text Heading */}
          <div className="xl:w-[357px] xl:h-[34px] xl:ml-48  xl:-mt-0 md:ml-28 md:mt-4 lg:ml-28 lg:mt-5 mx:-mt-12 mx:ml-20 sm:-mt-14 sm:ml-24 xm:ml-24 xm:-mt-14">
            <h2 className="text-Line text-xl font-semibold">
              02 <span className="text-white font-medium">MEET YOUR CREW</span>
            </h2>
          </div>
          {/* Crew Page */}
          <div className="mx:-ml-2 xm:-ml-2 sm:-ml-2 xl:-ml-0 lg:-ml-0 md:-ml-0">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Crew;
