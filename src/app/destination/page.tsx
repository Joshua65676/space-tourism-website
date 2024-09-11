"use client";

import React, {useState} from 'react'
import NavBar from '../../../components/NavBar';
import Moon from '../../../components/Moon';
import Mars from '../../../components/Mars';
import Europa from '../../../components/Europa';
import Titan from '../../../components/Titan';
// import Image from 'next/image'
// import Moon from '../../../public/assets/destination/image-moon.png'
// import Link from 'next/link'

const Destination: React.FC = () => {
    const [activeView, setActiveView] = useState<string>('Moon');

    const renderView = () => {
        switch (activeView) {
          case 'Moon':
            return <Moon setActiveView={setActiveView} />;
          case 'Mars':
            return <Mars setActiveView={setActiveView} />;
          case 'Europa':
            return <Europa setActiveView={setActiveView} />;
          case 'Titan':
            return <Titan setActiveView={setActiveView} />;
          default:
            return <Moon setActiveView={setActiveView} />;
        }
      };

  return (
    <div className="xl:bg-Destination-Desktop xl:bg-center xl:h-screen xl:bg-cover lg:bg-Destination-Tablet lg:bg-center lg:h-[1100px] lg:bg-cover md:bg-Destination-Tablet md:bg-center md:h-max md:bg-cover  sm:bg-Destination-Moblie sm:bg-center sm:h-max sm:bg-cover xm:bg-Destination-Moblie xm:bg-center xm:h-max xm:bg-cover mx:bg-Destination-Moblie mx:bg-center mx:h-max mx:bg-cover">
      <div className="">
        <NavBar />
      </div>
      <main className="xl:p-2">
            {/* Text Heading */}
         <div className="xl:w-[357px] xl:h-[34px] xl:ml-48  xl:-mt-0 md:ml-20 md:-mt-4 lg:ml-20 lg:-mt-10 mx:-mt-12 mx:ml-20 sm:-mt-14 sm:ml-24 xm:ml-24 xm:-mt-14">
            <h2 className='text-Line text-xl font-semibold'>01 <span className='text-white font-medium'>PICK YOUR DESTINATION</span></h2>
         </div> 
             {/* Moon Page */}
             {renderView()}

      </main>
    </div>
  )
}

export default Destination