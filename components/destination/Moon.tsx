import React from "react";
import Image from "next/image";
import { moon } from "../../public/assets/index";
import { DestinationLinks } from "@/constants";

interface Props {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Moon: React.FC<Props> = ({ activeView, setActiveView }) => {
  return (
    <div>
      <div className="xl:flex xl:justify-between xl:p-16 xl:space-x-44 lg:p-20 md:p-28 sm:p- xm:p- mx:p-16 lg:ml-56 xl:ml-0 md:ml-32 md:space-y-14 lg:space-y-12 xl:space-y-0 sm:space-y-8 xm:space-y-8 mx:space-y-8">
        {/* Moon Image */}
        <div className="xl:w-[539p] xl:h-[734p] xl:ml-36 lg:ml-0 md:ml-0 sm:ml-20 xm:ml-20 mx:ml-20">
          <Image
            src={moon}
            alt="Moon Image"
            className="xl:w-[380px] lg:w-[300px] md:w-[300px] sm:w-[150px] xm:w-[150px] mx:w-[150px]"
          />
        </div>
        {/* Explanation */}
        <div className="xl:w-[445px] xl:h-[390px] lg:h-[300px] md:space-y-7 lg:space-y-7 xl:space-y-7">
          <div className="">
            {/* Explanation List */}
            <div className="flex space-x-9 h-[40px] lg:ml-3 md:ml-3 xl:-ml-40 mx:ml-5 xm:ml-5 sm:ml-5">
              {DestinationLinks.map(({ id, links }) => (
                <ul key={id} className="">
                  <li className="text-white">
                    <button
                     className={` hover:border-b-4 border-Line ${activeView === links ? 'border-b-4 border-white' : " "}`}
                     onClick={() => setActiveView(links)}
                     >
                      {links}
                    </button>
                  </li>
                </ul>
              ))}
            </div>

            {/* Explanation heading */}
            <div className="h-[110px] xl:-ml-40 lg:-ml-0 md:-ml-0 mx:ml-10 xm:ml-10 sm:ml-10">
              <h1 className="text-white xl:text-8xl lg:text-8xl md:text-8xl mx:text-7xl xm:text-7xl sm:text-7xl">
                MOON
              </h1>
            </div>
            {/* Explanation Paragraph*/}
            <div className="xl:h-[128px] xl:w-[410px] md:w-[534px] lg:-ml-28 md:-ml-28 xm:w-[327px] xm:h-[135px] mx:w-[327px] mx:h-[135px] sm:w-[327px] sm:h-[135px] sm:-ml-3 xm:-ml-3 mx:-ml-3 sm:text-center xm:text-center mx:text-center xl:-ml-40 xl:text-left lg:text-center md:text-center">
              <p className="text-HomeText">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
          </div>
          {/* Explanation Line */}
          <hr className="xl:w-[430px] lg:w-[514px] md:w-[514px]  border-Line md:-ml-28 lg:-ml-28 xl:-ml-40 sm:w-[327px] xm:w-[327px] mx:w-[327px] sm:-ml-5 mx:-ml-5 xm:-ml-5" />
          {/* Explanation distance and day */}
          <div className="xl:flex xl:w-[445px] xl:h-[61px] mt-4 lg:flex md:flex lg:justify-around md:justify-around sm:w-[325px] sm:h-[146px] xm:w-[325px] xm:h-[146px] mx:w-[325px] mx:h-[146px] sm:text-center xm:text-center mx:text-center xl:-ml-32 lg:ml- md:ml- sm:ml-10 xm:ml-10 mx:ml-10 xl: lg: md: sm:space-y-5 xm:space-y-5 mx:space-y-5 xl:space-y-0 lg:space-y-0 md:space-y-0">
            <div className="w-[210.5px] h-[61px] space-y-2 lg:-ml-28 md:-ml-16">
              <span className="text-HomeText">Avg. distance</span>
              <h3 className="text-white text-2xl">384,400 km</h3>
            </div>
            <div className="w-[210.5px] h-[61px] space-y-2">
              <span className="text-HomeText">Est. travel time</span>
              <h3 className="text-white text-2xl">3 days</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
