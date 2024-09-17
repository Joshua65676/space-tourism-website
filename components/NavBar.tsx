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

        <div className="xl:w-[736px] xl:h-[96px] xl:-mr-[5.5rem] xl:-mt-3 md:-mt-3 lg:-mt-5 xl:flex md:flex sm:hidden xm:hidden mx:hidden  bg-white/10 backdrop-blur-0 shadow-lg">
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

        {/* <div className="xl:w-[736px] xl:h-[96px] xl:bg-slate-5 xl:-mr-[5.5rem] xl:-mt-3 md:-mt-3 lg:-mt-5 xl:flex md:flex sm:hidden xm:hidden mx:hidden">
          <ul className="flex p-10 space-x-10 ml-10">
            <li>
              <Link href="/" className="text-white">
                00 <span className="text-sm">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/destination" className="text-white">
                01 <span className="text-sm">Destination</span>
              </Link>
            </li>
            <li>
              <Link href="/crew" className="text-white">
                02 <span className="text-sm">Crew</span>
              </Link>
            </li>
            <li>
              <Link href="/technology" className="text-white">
                03 <span className="text-sm">Technology</span>
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Side Bar */}
        <div className="sm:flex sm:ml-72 sm:mt-7 xm:flex xm:ml-72 xm:mt-7 mx:flex mx:ml-72 mx:mt-7 md:hidden lg:hidden xl:hidden">
          <SideBar />
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
