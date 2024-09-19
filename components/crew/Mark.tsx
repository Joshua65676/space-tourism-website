import React from "react";
import Image from 'next/image'
import { mark } from '../../public/assets'
import { CrewLinks } from "@/constants";

interface Props {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Mark: React.FC<Props> = ({ activeView, setActiveView }) => {
  return (
    <div>
      <main className="xl:flex xl:justify-between xl:p-16 xl:space-x-44 lg:p-20 md:p-28 sm:p- xm:p- mx:p-16 lg:ml-56 xl:ml-0 md:ml-32 md:space-y-14 lg:space-y-12 xl:space-y-0 sm:space-y-8 xm:space-y-8 mx:space-y-8">
        {/* Explanation */}
        <div className="xl:w-[445px] xl:pt-10 xl:h-[390px] lg:h-[300px] md:space-y-7 lg:space-y-7 xl:space-y-10">
          {/* Explanation heading */}
          <div className="space-y-3 xl:h-[110px] w-[530px] xl:ml-32 lg:ml-0 md:ml-0 mx:ml-10 xm:ml-10 sm:ml-10">
            <h2 className="text-white opacity-50 xl:text-[32px] xl:ml-0 lg:text-2xl lg:ml-10 md:text-2xl md:ml-10 uppercase">Mission Specialist</h2>
            <h1 className="text-white uppercase xl:text-[50px] xl:ml-0 lg:text-[40px] lg:-ml-20 md:text-[40px] md:-ml-20 mx:text-7xl xm:text-7xl sm:text-7xl">
              MARK SHUTTLEWORTH
            </h1>
          </div>
          {/* Explanation Paragraph*/}
          <div className="xl:pt-6 xl:h-[51px] xl:w-[539px] md:w-[600px] lg:w-[600px] lg:-ml-36 md:-ml-32 xm:w-[327px] xm:h-[135px] mx:w-[327px] mx:h-[135px] sm:w-[327px] sm:h-[135px] sm:-ml-3 xm:-ml-3 mx:-ml-3 sm:text-center xm:text-center mx:text-center xl:ml-32 xl:text-left lg:text-center md:text-center">
            <p className="text-HomeText leading-loose text-lg font-normal">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
          {/* Explanation List*/}
          <div className="xl:m-32 xl:pt-32 space-x-5 lg:ml-28 md:ml-28">
            {CrewLinks.map(({ id, path }) => (
              <label key={id} className="">
                <input
                  type="radio"
                  name="Douglas"
                  value="path"
                  checked={activeView === path}
                  onChange={() => setActiveView(path)}
                />
              </label>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="xl:w-[539px] xl:h-[64px] xl:pl-10 lg:ml-0 md:ml-0 sm:ml-20 xm:ml-20 mx:ml-20">
          <Image
            src={mark}
            alt="Moon Image"
            className="xl:w-[330px] xl:-mb-16 xl:-mt-16 lg:w-[340px] lg:-mb-32 lg:-mt-10 md:w-[340px] md:-mb- md:-mt-5 sm:w-[150px] xm:w-[150px] mx:w-[150px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Mark;
