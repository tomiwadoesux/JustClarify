export default function Header() {
  return (
    <div className=" z-30">
      <div className=" w-full px-4 md:px-10 py-5 absolute ">
        <div className="flex flex-row gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"
          >
            <g clip-path="url(#clip0_6_53)">
              <path
                d="M0 0H16.64C25.1231 0 32 6.87692 32 15.36V32H16C7.16346 32 0 24.8365 0 16V0Z"
                fill="#4447A9"
              />
              <path
                d="M26.88 26.88H15.9802C9.98225 26.88 5.12001 22.0079 5.12001 16.0099C5.12001 10.001 9.99116 5.12001 16 5.12001C22.0088 5.12001 26.88 9.99116 26.88 16V26.88Z"
                fill="black"
              />
              <path
                d="M24.4364 24.4364H15.9846C11.3338 24.4364 7.56364 20.6585 7.56364 16.0077C7.56364 11.3484 11.3407 7.56364 16 7.56364C20.6593 7.56364 24.4364 11.3407 24.4364 16V24.4364Z"
                fill="#F0F0F0"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_53">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-sm md:text-xl  self-center p-0 ">JustClarify</h1>
        </div>
      </div>
      <div className="hidden md:block">
        <div className=" flex flex-col md:flex-row gap-4">
          <div className="flex px-6 py-5 left-[78.32%] absolute ">
            <button className="px-3 py-1 text-nowrap bg-[#4447A9] text-white outline-btn">
              <h1 className="text-xs md:text-sm  self-center p-0 ">
                Add to Chrome
              </h1>
            </button>
          </div>
          <div className="flex px-6 py-5 right-[21.68%] absolute ">
            <button className="px-3 py-1 text-nowrap bg-[#2D2D2D] text-white outline-btn">
              <h1 className="text-sm md:text-sm  self-center p-0 ">
                Watch the Demo
              </h1>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden  absolute right-3 top-7 flex flex-col gap-4">
        <div className=" flex flex-col md:flex-row gap-5">
          <div className="flex px-6   ">
            <button className="px-4 py-1 text-nowrap bg-[#4447A9] text-white outline-btn">
              <h1 className="text-xs md:text-sm  self-center p-0 ">
                Add to Chrome
              </h1>
            </button>
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
