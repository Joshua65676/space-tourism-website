import React from "react";
import { TechnologyLinks } from "@/constants";
import Image from "next/image";
import { spaceportTablet, spaceportDesktop, spaceportMobile } from "../../public/assets";

interface Props {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Spaceport: React.FC<Props> = ({ activeView, setActiveView }) => {
  return (
    <section className="">
      <main className="xl:flex xl:flex-row md:flex-col-reverse md:flex lg:flex-col-reverse lg:flex mx:flex-col-reverse mx:flex xm:flex-col-reverse xm:flex container max-w-6xl mx-auto w-full xl:pt-10 md:pt-20 lg:pt-20 mx:pt-14 xm:pt-20 ">
        {/* DETAILS */}
        <div className="xl:flex xl:flex-row xl:pl-8 xl:gap-10 xl:pt-20 xl:text-left md:text-center md:flex md:flex-col md:gap-10 md:items-center md:pt-10  mx:text-center mx:flex mx:flex-col mx:gap-10 mx:items-center mx:pt-10">
          {/* LIST */}
          <div className="xl:h-[304px] xl:flex-col xl:justify-start items-start gap-8 inline-flex">
            {TechnologyLinks.map(({ id, number, links }) => (
              <ul key={id} className="">
                <li className="text-white">
                  <button className={`xl:w-20 xl:h-20 md:w-14 md:h-14 mx:w-10 mx:h-10 rounded-[999px] border border-white/25 hover:border-white flex-col justify-center items-center gap-2 flex ${activeView === links ? "bg-white text-black" : "text-white"}`} onClick={() => setActiveView(links)}>
                    {number}
                  </button>
                </li>
              </ul>
            ))}
          </div>
          {/* HEADING & PARAGRAPH */}
          <div className="xl:flex xl:flex-col xl:gap-10 mx:gap-4 mx:flex mx:flex-col">
            {/* HEADING */}
            <div className="xl:flex xl:flex-col xl:gap-10 mx:gap-4 mx:flex mx:flex-col">
              <div className="opacity-50 text-white xl:text-[32px] md:text-2xl mx:text-lg self-stretch font-['Bellefair'] font-normal uppercase">
                <h3 className="">THE TERMINOLOGY…</h3>
              </div>
              <div className="text-white xl:text-[56px] md:text-[40px] mx:text-2xl self-stretch font-normal font-['Bellefair'] uppercase w-[500px]">
                <h1 className="text-white">SPACEPORT</h1>
              </div>
            </div>
            {/* PARAGRAPH */}
            <div className="xl:text-lg md:text-base mx:text-[15px] font-normal font-['Barlow'] xl:leading-relaxed md:leading-7 mx:leading-[27px] md:ml-5 xl:ml-0 mx:ml-[5.5rem] xm:ml-[6rem] text-HomeText xl:w-[470px] md:w-[460px] mx:w-[337.3px] xm:w-[303px] mx:mb-10 md:mb-32 lg:mb-0">
              <p className="">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className="xl:-mt-5 xl:pl-10">
          <Image src={spaceportTablet} alt="" className="xl:hidden sm:hidden xm:hidden mx:hidden lg:flex lg:w-[900px] lg:h-[400px] md:flex md:w-[900px] md:h-[400px] mix-blend-screen" />
          <Image src={spaceportDesktop} alt="" className="xl:w-[608px] xl:h-[460px] xl:flex lg:hidden md:hidden sm:hidden xm:hidden mx:hidden mix-blend-screen" />
          <Image src={spaceportMobile} alt="" className="xm:w-[450px] xm:h-[376px] xm:flex mx:w-[450px] mx:h-[376px] mx:flex sm:w-[608px] sm:h-[460px] sm:flex xl:hidden lg:hidden md:hidden mix-blend-screen" />
        </div>
      </main>
    </section>
  );
};

export default Spaceport;
