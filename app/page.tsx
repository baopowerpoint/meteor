import { Meteors } from "@/components/Meteors";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col h-screen w-full rounded-md relative  items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700  text-center font-sans font-bold">
            Hello boyyyy :)
          </h1>
        </div>
        <Meteors number={50} />
      </div>
    </main>
  );
}
