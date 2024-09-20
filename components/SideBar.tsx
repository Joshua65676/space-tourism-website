"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Close } from "../public/assets/index";
import { Hamburger } from "../public/assets/index";
import { NavLinks } from "@/constants";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-[37px] h-[88px]">
      <div className="mx:ml-1 sm:-ml-8" onClick={toggleIcon}>
        {isOpen ? (
          <Image src={Hamburger} alt="hamburger" />
        ) : (
        <div className="space-y-16 bg-white/20 backdrop-blur-sm shadow-lg h-screen -ml-40 pt-20 -mt-20">
            <Image src={Close} alt="" className="ml-[10rem]"/>
          <div className="space-y-10 ml-10 absolute text-left">
            {NavLinks.map(({ id, title, link, number }) => (
            <ul key={id} className="z-[1] relative">
              <li>
                <Link href={link} className="text-white text-2xl font-semibold">
                  <span> {number} </span>
                  <span className="text-xl font-medium">{title}</span>
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
