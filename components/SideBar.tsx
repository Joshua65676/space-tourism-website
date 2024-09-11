"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import close from '../public/assets/shared/icon-close.svg'
import hamburger from '../public/assets/shared/icon-hamburger.svg'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='w-[37px] h-[88px]'>
        <div className='-ml-3' onClick={toggleIcon}>
          {isOpen ?
             <Image src={hamburger} alt='hamburger' />
           :
             <div className='space-y-16'>
                <Image src={close} alt='' />
              <div className=''>
                <ul className="space-y-10 -ml-40">
                  <li>
                    <Link href="/" className="text-white text-2xl font-semibold -ml-10">00 <a className="text-xl font-medium">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination" className="text-white text-2xl font-semibold">01 <a className="text-xl font-medium">Destination</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/crew" className="text-white text-2xl font-semibold -ml-14">02 <a className="text-xl font-medium">Crew</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/technology" className="text-white text-2xl font-semibold">03 <a className="text-xl font-medium">Technology</a>
                    </Link>
                  </li>
                 </ul>
              </div>
             </div>
          }
        </div>
    </div>
  )
}

export default SideBar
