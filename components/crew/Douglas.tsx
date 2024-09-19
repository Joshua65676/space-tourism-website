import React from "react";
import Image from 'next/image'
import { douglas } from '../../public/assets'
import { CrewLinks } from "@/constants";

interface Props {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Douglas: React.FC<Props> = ({ activeView, setActiveView }) => {
  return (
    <div>
      <main className="xl:flex xl:justify-between xl:p-16 xl:space-x-44 lg:p-20 md:p-28 sm:p- xm:p- mx:p-16 lg:ml-56 xl:ml-0 md:ml-32 md:space-y-14 lg:space-y-12 xl:space-y-0 sm:space-y-8 xm:space-y-8 mx:space-y-8">
        {/* Explanation */}
        <div className="xl:w-[445px] xl:pt-10 xl:h-[390px] lg:h-[300px] md:space-y-7 lg:space-y-7 xl:space-y-10">
          {/* Explanation heading */}
          <div className="space-y-3 h-[110px] w-[530px] xl:ml-32 lg:ml-0 md:ml-0 mx:ml-10 xm:ml-10 sm:ml-10">
            <h2 className="text-white opacity-50 xl:text-[32px] xl:ml-0 lg:text-2xl lg:ml-20 md:text-2xl md:ml-20 uppercase">Commander</h2>
            <h1 className="text-white uppercase xl:text-[50px] xl:ml-0 lg:text-[40px] lg:-ml-6 md:text-[40px] md:-ml-6 mx:text-[] xm:text-[] sm:text-[]">
              Douglas Hurley
            </h1>
          </div>
          {/* Explanation Paragraph*/}
          <div className="xl:h-[51px] xl:w-[539px] md:w-[600px] lg:w-[600px] lg:-ml-36 md:-ml-32 xm:w-[327px] xm:h-[135px] mx:w-[327px] mx:h-[135px] sm:w-[327px] sm:h-[135px] sm:-ml-3 xm:-ml-3 mx:-ml-3 sm:text-center xm:text-center mx:text-center xl:ml-32 xl:text-left lg:text-center md:text-center">
            <p className="text-HomeText leading-loose text-lg font-normal">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
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
        <div className="xl:w-[539px] xl:h-[64px] xl:pl-10  lg:ml-0 md:ml-0 sm:ml-20 xm:ml-20 mx:ml-20">
          <Image
            src={douglas}
            alt="Douglas image"
            className="xl:w-[360px] xl:-mb-16 xl:-mt-16 lg:w-[350px] lg:-mb-20 lg:-mt-10 md:w-[350px] md:-mb- md:-mt-10 sm:w-[150px] xm:w-[150px] mx:w-[150px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Douglas;
