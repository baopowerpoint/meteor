"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils/cn";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const windowSize = useWindowSize();
  console.log(windowSize);
  const currentwidth = windowSize.width
    ? windowSize.width
    : Math.random() * 1000 + 400;
  const meteors = new Array(number || 10).fill(true);
  return (
    <div className="w-full">
      {meteors.map((el, index) => (
        <span
          key={"meteor" + index}
          className={cn(
            "animate-meteor absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-white backdrop-blur-2xl  shadow-[0_0_0_1px_#ffffff10] rotate-[200deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[40%] before:w-[100px] before:h-[2px] before:bg-gradient-to-r before:from-[#92a3be] before:to-transparent",
            className
          )}
          style={{
            top: 0 + currentwidth * Math.random(),
            left: Math.floor(Math.random() * currentwidth! + -400) + "px",
            animationDelay: Math.random() * (1 - 0.3) + 0.1 + "s",
            animationDuration:
              Math.floor(Math.random() * (10 - 2) * 0.3 + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
