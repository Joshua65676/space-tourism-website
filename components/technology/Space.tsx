import React from "react";
import { TechnologyLinks } from "@/constants";
import Image from "next/image";
import { spaceTablet, spaceDesktop } from "../../public/assets";

interface Props {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Space: React.FC<Props> = ({ activeView, setActiveView }) => {
  return (
    <section className="">
      <main className="xl:flex xl:flex-row md:flex-col-reverse md:flex lg:flex-col-reverse lg:flex container max-w-6xl mx-auto w-full xl:pt-10 md:pt-20 lg:pt-20 ">
        {/* DETAILS */}
        <div className="xl:flex xl:flex-row xl:pl-8 xl:gap-10 xl:pt-20 xl:text-left md:text-center md:flex md:flex-col md:gap-10 md:items-center md:pt-10">
          {/* LIST */}
          <div className="xl:h-[304px] xl:flex-col xl:justify-start items-start gap-8 inline-flex">
            {TechnologyLinks.map(({ id, number, links }) => (
              <ul key={id} className="">
                <li className="text-white">
                  <button className={`xl:w-20 xl:h-20 md:w-14 md:h-14 rounded-[999px] border border-white/25 hover:border-white flex-col justify-center items-center gap-2 flex ${activeView === links ? "bg-white text-black" : "text-white"}`} onClick={() => setActiveView(links)}>
                    {number}
                  </button>
                </li>
              </ul>
            ))}
          </div>
          {/* HEADING & PARAGRAPH */}
          <div className="xl:flex xl:flex-col xl:gap-5">
            {/* HEADING */}
            <div className="xl:flex xl:flex-col">
              <div className="opacity-50 text-white xl:text-[32px] md:text-2xl font-['Bellefair'] font-normal uppercase">
                <h3 className="">THE TERMINOLOGY…</h3>
              </div>
              <div className="text-white xl:text-[56px] md:text-[40px] font-normal font-['Bellefair'] uppercase w-[500px]">
                <h1 className="text-white">SPACE CAPSULE</h1>
              </div>
            </div>
            {/* PARAGRAPH */}
            <div className="xl:text-lg md:text-base font-normal font-['Barlow'] xl:leading-relaxed md:leading-7 md:ml-5 xl:ml-0 text-HomeText xl:w-[470px] md:w-[460px] md:mb-32 lg:mb-0">
              <p className="">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth&apos;s atmosphere
                without wings. Our capsule is where you&apos;ll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className="xl:-mt-5 xl:pl-10">
          <Image src={spaceTablet} alt="" className="xl:hidden lg:flex lg:w-[900px] lg:h-[400px] md:flex md:w-[900px] md:h-[400px] mix-blend-screen" />
          <Image src={spaceDesktop} alt="" className="xl:w-[608px] xl:h-[460px] xl:flex lg:hidden md:hidden mix-blend-screen" />
        </div>
      </main>
    </section>
  );
};

export default Space;
