import { cn } from "@/lib/utils";
import ShinyText from "./animation/shiny-text";
import ShimmerButton from "./animation/shimmer-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-sm sm:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <ShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ betwnUI coming soon</span>
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
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                    Schedule a call
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
