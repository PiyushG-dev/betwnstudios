import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/animation/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/animation/bento-grid";
import {
  TargetIcon,
  PersonIcon,
  StarFilledIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

export function BentoGridSecondDemo() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center pb-10 flex flex-col gap-2">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Achieve growth
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Take the next step without any hassle & get results fast
        </h2>

        {/* <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p> */}
      </div>
      <BentoGrid className="mx-auto max-w-7xl px-6 lg:px-8 md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Predictive Insights",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <TargetIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fastest Speed",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <PersonIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <StarFilledIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Everything in Cloud",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <GlobeIcon className="h-4 w-4 text-neutral-500" />,
  },
];
