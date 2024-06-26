import { cn } from "@/lib/utils";
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