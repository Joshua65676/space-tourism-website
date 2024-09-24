import React from "react";
import Image from 'next/image'
import { victor } from '../../public/assets'
import { CrewLinks } from "@/constants";

interface Props {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Victor: React.FC<Props> = ({ activeView, setActiveView }) => {
  return (
    <div>
      <main className="xl:flex xl:justify-between xl:p-16 xl:space-x-44 lg:p-20 md:p-28 sm:p- xm:p- mx:p-16 lg:ml-56 xl:ml-0 md:ml-32 md:space-y-14 lg:space-y-12 xl:space-y-0 sm:space-y-8 xm:space-y-8 mx:space-y-8">
        {/* Explanation */}
        <div className="xl:w-[445px] xl:pt-10 xl:h-[390px] lg:h-[300px] md:space-y-7 lg:space-y-7 xl:space-y-10">
          {/* Explanation heading */}
          <div className="xl:space-y-5 space-y-3 h-[110px] w-[530px] xl:ml-32 lg:-ml-0 md:-ml-0 mx:ml-10 xm:ml-10 sm:ml-10">
            <h2 className="text-white opacity-50 xl:text-[32px] xl:ml-0 lg:text-3xl lg:ml-28 md:text-3xl md:ml-32 xm:text-lg mx:text-xl xm:ml-24 mx:ml-20 uppercase">PILOT</h2>
            <h1 className="text-white uppercase xl:text-[50px] xl:ml-0 lg:text-[40px] lg:-ml-3 md:text-[40px] md:ml-3 mx:text-2xl xm:text-2xl sm:text-2xl mx:ml-5 xm:ml-7">
              Victor Glover
            </h1>
          </div>
          {/* Explanation Paragraph*/}
          <div className=" xl:h-[51px] xl:w-[539px] md:w-[600px] lg:w-[600px] lg:-ml-36 md:-ml-32 xm:w-[335px] xm:h-[200px] mx:w-[330px] mx:h-[200px] sm:w-[327px] sm:h-[135px] sm:-ml-3 xm:-ml-1 mx:-ml-3 sm:text-center xm:text-center mx:text-center xl:ml-32 xl:text-left lg:text-center md:text-center">
            <p className="text-HomeText leading-loose xl:text-lg lg:text-lg md:text-lg font-normal xm:text-[15px] mx:text-[15px]">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          {/* Explanation List*/}
          <div className="xl:m-32 xl:pt-32 space-x-5 lg:ml-28 md:ml-28 xm:ml-24 mx:ml-20">
            {CrewLinks.map(({ id, path }) => (
              <label key={id} className="">
                <input
                  type="radio"
                  name="Victor"
                  value="path"
                  checked={activeView === path}
                  onChange={() => setActiveView(path)}
                />
              </label>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="xl:w-[539px] xl:h-[64px] xl:pl-10 lg:ml-0 md:ml-0 sm:ml-20 xm:ml-8 mx:ml-8">
          <Image
            src={victor}
            alt="Victor Image"
            className="xl:w-[380px] xl:-mb-16 xl:-mt-5 lg:w-[350px] lg:-mb-20 lg:mt-10 md:w-[350px] md:mb-3 md:mt-10 sm:w-[271px] xm:w-[271.27px] mx:w-[271.27px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Victor;
