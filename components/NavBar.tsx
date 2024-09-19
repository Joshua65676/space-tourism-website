"use client";

import Link from "next/link";
import { Logo } from "../public/assets/index";
import React from "react";
import Image from "next/image";
import SideBar from "./SideBar";
import { NavLinks } from "@/constants";

const NavBar = () => {
  return (
    <main className="xl:w-[1440px] xl:h-[136px]">
      <nav className="flex justify-between p-10 text-center">
        {/* NavBar and Line */}
        <div className="flex justify-between w-[736px] h-[48px] mt-3">
          {/* Navebar */}
          <div className="-mt-5 ml-10">
            <Link href="/" className="ml-10">
              <Image src={Logo} alt="" />
            </Link>
          </div>

          <div className="mt-7">
            <hr className="xl:flex xl:w-[560.00px] xl:h-[1px] xl:border-Line sm:hidden xm:hidden mx:hidden md:hidden" />
          </div>
        </div>

        <div className="xl:w-[736px] lg:w-[2500px] lg:-mr-10 md:w-[3000px] md:-mr-20 xl:h-[96px] xl:-mr-[5.5rem] xl:-mt-3 md:-mt-3 lg:-mt-3 xl:flex md:flex sm:hidden xm:hidden mx:hidden  bg-white/10 backdrop-blur-0 shadow-lg">
          {NavLinks.map(({ id, title, link, number }) => (
            <ul key={id} className="flex p-10 space-x-10 ml-">
              <li>
                <Link href={link} className="text-white">
                  <span> {number} </span>
                  <span className="text-sm">{title}</span>
                </Link>
              </li>
            </ul>
          ))}
        </div>

        {/* Side Bar */}
        <div className="sm:flex sm:ml-72 sm:mt-7 xm:flex xm:ml-72 xm:mt-7 mx:flex mx:ml-72 mx:mt-7 md:hidden lg:hidden xl:hidden">
          <SideBar />
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
