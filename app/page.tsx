"use client";
import { Meteors } from "@/components/Meteors";
import React from "react";

export default function Home() {
  const [meteorQuantity, setMeteorQuantity] = React.useState(50);
  const handleIncrease = () => {
    if (meteorQuantity >= 200) return;
    setMeteorQuantity((prev) => prev + 10);
  };
  const handleIncreaseByHundred = () => {
    setMeteorQuantity((prev) => prev + 100);
  };
  const handleDecrease = () => {
    if (meteorQuantity <= 0) return;
    setMeteorQuantity((prev) => prev - 10);
  };
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col h-screen w-full rounded-md relative  items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700  text-center font-sans font-bold">
            Hello boyyyy :)
          </h1>
          <div className="flex items-center gap-5 mt-5 justify-center ">
            <button
              onClick={handleIncrease}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                <p className="mx-5">Tăng</p>
              </span>
            </button>
            {meteorQuantity >= 200 && (
              <button
                onClick={handleIncreaseByHundred}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                  <p className="mx-5">Tăng tiếp :)))</p>
                </span>
              </button>
            )}
            <p>{meteorQuantity} ngôi sao</p>
            <button
              onClick={handleDecrease}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#fb7185_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                <p className="mx-5">Giảm</p>
              </span>
            </button>
          </div>
        </div>
        <Meteors number={meteorQuantity} />
      </div>
    </main>
  );
}
