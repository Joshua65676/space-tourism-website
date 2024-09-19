import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="xl:bg-Home-Desktop xl:bg-center xl:h-screen xl:bg-cover md:bg-Home-Tablet md:bg-center md:h-screen md:bg-cover sm:bg-Home-Moblie sm:bg-center sm:h-max sm:bg-cover xm:bg-Home-Moblie xm:bg-center xm:h-[1000px] xm:bg-cover mx:bg-Home-Moblie mx:bg-center mx:h-[1000px] mx:bg-cover lg:bg-Home-Tablet lg:bg-center lg:h-screen lg:bg-cover">
      <div className="xm:-ml-14 sm:-ml-12 mx:-ml-14 md:ml-0 lg:ml-0 xl:ml-0">
        <NavBar />
      </div>
      {/* <div className="container max-w-6xl mx-auto w-full"> */}
      <div className=" xl:p-28 xl:w-[1110px] xl:h-[343px] xl:flex md:text-center lg:text-center sm:text-center xm:text-center mx:text-center md:p-5 md:mt-10 lg:mt-10 lg:p-5 md:w-[768px] lg:w-[768px] sm:w-[327px] sm:h-[294px] xm:w-[327px] xm:h-[294px]  mx:w-[327px] mx:h-[294px] sm:-ml-12">
        {/* headline and paragraphs */}
        <div className="xl:w-[5430px] xl:h-[343px] md:w-[512px] lg:w-[512px] md:h-[334px] lg:h-[334px] xl:ml-0 md:ml-32 lg:ml-64 sm:ml-[90px] xm:ml-[90px] mx:ml-[90px]">
          {/* headline */}
          <div className="xl:w-[540px] md:w-[540px] space-y-4 sm:w-[290px] xm:w-[327px] mx:w-[290px]">
            <h4 className="h-[34px] text-2xl text-HomeText sm:text-base xm:text-lg mx:text-base xm:-ml-5 sm:ml-5 mx:ml-5 xl:-ml-16 md:-ml-20 lg:-ml-48">
              SO, YOU WANT TO TRAVEL TO
            </h4>
            <h1 className="xl:h-[160px] lg:h-[160px] mx:h-[95px] sm:h-[95px] xm:h-[120px] xl:text-9xl lg:text-9xl md:text-8xl text-white sm:text-7xl xm:text-8xl mx:text-7xl sm:ml-5 xm:-ml-5 mx:ml-5 xl:ml-20 md:-ml-20 lg:-ml-48">
              SPACE
            </h1>
          </div>
          {/* paragraphs */}
          <div className="xl:w-[500px] xl:h-[96px] lg:w-[500px] lg:h-[96px] md:w-[500px] md:h-[96px] sm:w-[327px] xm:w-[327px] mx:w-[327px] xm:ml-2 mx:ml-2 sm:ml-2 xl:ml-28 lg:-ml-12 xm:text-center xl:text-left">
            <p className="text-HomeText mx:-ml-10 xm:-ml-10 sm:-ml-10 xl:-ml-2 lg:-ml-">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        <div className="w-[50px] h-[272px] xl:ml-64  lg:ml-40 md:ml-24 mx:ml-40 mx:mt-20 sm:ml-40 sm:mt-20 xm:ml-40 xm:mt-20 xl:mt-0 lg:mt-0 md:mt-0">
          <Link href="/destination">
            <button className="xl:w-[272px] xl:h-[272px] lg:w-[272px] lg:h-[272px] md:w-[272px] md:h-[272px] xm:w-[154px] xm:h-[154px] sm:w-[154px] sm:h-[154px] mx:w-[154px] mx:h-[154px] rounded-full bg-white">
              <span className="w-[136px] h-[37px] text-2xl text-blue-950">
                Explore
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
