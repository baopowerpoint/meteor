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
              className="border border-slate-100 px-5 py-1 rounded-full "
            >
              <p className="mx-5">Tăng</p>
            </button>
            {meteorQuantity >= 200 && (
              <button
                onClick={handleIncreaseByHundred}
                className="border border-slate-100 px-5 py-1 rounded-full "
              >
                <p className="mx-5">Tăng tiếp :)))</p>
              </button>
            )}
            <p>{meteorQuantity} ngôi sao</p>
            <button
              onClick={handleDecrease}
              className="border border-slate-100 px-5 py-1 rounded-full "
            >
              <p className="mx-5">Giảm</p>
            </button>
          </div>
        </div>
        <Meteors number={meteorQuantity} />
      </div>
    </main>
  );
}
