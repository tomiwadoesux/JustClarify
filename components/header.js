"use client";

import Image from "next/image";
import OutlineButton from "./outline-button";

export default function Header() {
  return (
    <div className="relative z-50 w-full">
      <div className=" w-full px-4 md:px-10 py-5 absolute ">
        <div className="flex flex-row gap-2">
          <Image
            src="/Images/logoimg.png"
            alt="JustClarify logo"
            width={32}
            height={32}
            priority
            className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6"
          />
          <h1 className="text-sm md:text-xl self-center p-0">JustClarify</h1>
        </div>
      </div>
      <div className="hidden md:block">
        <div className=" flex flex-col md:flex-row gap-4">
          <div className="flex px-6 py-5 left-[78.32%] absolute ">
            <OutlineButton
              onClick={() => window.open("https://ayotomcs.me/", "_blank")}
            >
              <h1 className="text-xs md:text-sm self-center p-0 ">
                Add to Chrome
              </h1>
            </OutlineButton>
          </div>
          <div className="flex px-6 py-5 right-[21.68%] absolute ">
            <OutlineButton
              onClick={() => {
                const section = document.getElementById("video-section");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="!bg-[#2D2D2D]"
            >
              <h1 className="text-sm md:text-sm self-center p-0 ">
                Watch the Demo
              </h1>
            </OutlineButton>
          </div>
        </div>
      </div>
      <div className="md:hidden  absolute right-3 top-7 flex flex-col gap-4">
        <div className=" flex flex-col md:flex-row gap-5">
          <div className="flex px-6 ">
            <OutlineButton
              onClick={() => window.open("https://ayotomcs.me/", "_blank")}
            >
              <h1 className="text-xs md:text-sm self-center p-0 ">
                Add to Chrome
              </h1>
            </OutlineButton>
          </div>
          {/* <div className="flex px-6 ">
            <button className="px-3 py-1 text-nowrap bg-[#2D2D2D] text-white outline-btn">
              <h1 className="text-xs md:text-sm  self-center p-0 ">
                Watch the Demo
              </h1>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
