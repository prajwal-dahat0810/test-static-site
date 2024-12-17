"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    imgUrl: string;
    content: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 [@media_(max-width:320px)]:w-80  max-sm:max-w-96 md:max-w-[760px] lg:max-w-[1000px]  xl:max-w-[1400px] overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-10 py-2 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[300px] border-[0.5px] min-h-[300px] pt-[32px] relative rounded-2xl   flex-shrink-0  px-8  md:w-[450px]"
            style={{
              background: "bg-gray-950/[.01]",
            }}
            key={item.name}
          >
            <blockquote className="">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)]  w-[560px] max-sm:w-[310px] min-h-[358px]  rounded-xl "
              ></div>
              <div className="relative z-20  flex flex-row items-center  justify-start ">
                <div className="p-1 h-[100px] w-[100px]">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="flex pt-4 px-2 items-start   flex-col ">
                  <span className=" text-[#43B6B6] text-2xl   font-normal">
                    {item.name}
                  </span>
                  <span className=" text-lg text-black   font-normal">
                    {item.title}
                  </span>
                </div>
              </div>
              <div className="w-full mt-5 mb-3  border-b-[0.5px] bg-white rounded-xl"></div>
              <span className=" max-sm:text-base py-2 text-black max-sm:leading-6 max-sm:text-center leading-[30px] relative z-20 text-base   font-normal">
                {item.content}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
