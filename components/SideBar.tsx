"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { Close } from "../public/assets/index";
import { Hamburger } from "../public/assets/index";
import { NavLinks } from "@/constants";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname()

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-[37px] h-[88px]">
      <div className="mx:ml-1 sm:-ml-8 xm:pl-3" onClick={toggleIcon}>
        {isOpen ? (
          <Image src={Hamburger} alt="hamburger" />
        ) : (
        <div className="space-y-16 bg-white/20 backdrop-blur-sm shadow-lg h-screen -ml-40 pt-20 -mt-20">
            <Image src={Close} alt="" className="ml-[10rem]"/>
          <div className="space-y-10 ml-4 absolute text-left">
            {NavLinks.map(({ id, title, link, number }) => (
            <ul key={id} className="">
              <li className={` ${pathname === link ? " self-stretch h-[19px] border-r-2 border-white flex-col justify-center items-start gap-2 flex" : " "}`}>
                <Link href={link}
                className="z-[1] relative font-['Barlow Condensed'] tracking-[2.70px] text-white text-base font-bold justify-start items-start gap-3 flex">
                  <span> {number} </span>
                  <span className="text-base font-normal tracking-widest font-['Barlow Condensed']">{title}</span>
                </Link>
              </li>
            </ul>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
