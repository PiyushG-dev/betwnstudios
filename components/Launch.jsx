"use client";

import { useRef } from "react";
import Confetti from "@/components/animation/confetti";
import { Button } from "./ui/button";
import AnimatedGradientText from "./animation/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function Launch() {
  const confettiRef = useRef(null);

  return (
    <div>
      <div className="bg-dot-black/[0.2] relative flex h-[500px] w-full max-w-screen-xl mx-auto flex-col items-center justify-center overflow-hidden bg-background">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <AnimatedGradientText>
          🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            coming soon
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          betwn UI
        </h1>
        <p className="mt-4 text-gray-500 sm:text-xl text-center max-w-3xl z-10 px-2">
          Introducing our brand new UI Component Library and Template kits
        </p>
        <Button className="mt-4 z-10 md:text-base" size="lg">
          Browse library
        </Button>
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 h-full w-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
      </div>
    </div>
  );
}
