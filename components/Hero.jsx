import { Button } from "./ui/button";
import RetroGrid from "./animation/retro-grid";
import { cn } from "@/lib/utils";
import ShinyText from "./animation/shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ShinyButton from "./animation/shiny-button";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <RetroGrid />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-foreground">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-sm sm:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <ShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing betwn studios</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </ShinyText>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Built to elevate startups
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We create visually stunning and highly functional interfaces that
              engage visitors to drive conversions and ensure a hassle-free
              experience from concept to launch.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/calcom">
                <ShinyButton text="Book a call" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
