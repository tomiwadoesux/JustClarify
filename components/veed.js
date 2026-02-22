"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Veed() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll animation for video rect moving up
  useEffect(() => {
    const vidGroup = document.querySelector("#vid-group");
    if (!vidGroup || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
      },
    });

    tl.to(vidGroup, {
      y: 0, // Move up 150px as you scroll
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-visible">
      <svg
        width="100%"
        className="-top-[0.1rem] relative hidden md:block overflow-visible"
        height="auto"
        viewBox="0 0 1513 583"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <g id="Group 39">
          <g id="Group 21">
            <g id="Frame2">
              <rect x="1195" y="10" width="117" height="28" fill="#4447A9" />

              <text
                x="1204"
                y="26"
                fill="white"
                font-size="17"
                dominant-baseline="middle"
              >
                How it Works
              </text>
            </g>
            <path
              id="rect2804"
              d="M0.111328 0.75H1185.11"
              stroke="#8D8D8D"
              stroke-width="1.5"
            />
          </g>
          <path
            id="Vector"
            d="M1185.18 0.910645C1185.18 87.6222 1219.64 170.782 1281 232.097C1342.35 293.411 1425.57 327.857 1512.33 327.857"
            stroke="#8D8D8D"
            stroke-width="1.5"
          />

          {/* Video rect group - moves up on scroll */}
          <g id="vid-group">
            <rect id="vid" y="1.75" width="1184" height="581" fill="#D9D9D9" />

            {/* Play Icon - centered on the video rect */}
            <g id="play-icon" transform="translate(542, 241)">
              {/* Circle background */}
              <circle cx="50" cy="50" r="50" fill="#4447A9" opacity="0.9" />
              {/* Play triangle */}
              <polygon points="40,30 40,70 72,50" fill="#FFFFFF" />
            </g>
          </g>

          <line
            id="Line 35"
            x1="6.55671e-08"
            y1="582"
            x2="1512"
            y2="582"
            stroke="#8D8D8D"
            stroke-width="1.5"
          />
        </g>
      </svg>

      <div className="md:hidden">
        <div className="">
          <div className="pt-8 pb-2 px-4 justify-end flex  ">
            <h1 className="text-base text-[#fafafa] bg-[#4447a9] text-right  w-fit px-2 py-0">
              How it works
            </h1>
          </div>

          <div className="bg-black aspect-[16/9]"></div>
        </div>
      </div>
    </div>
  );
}
