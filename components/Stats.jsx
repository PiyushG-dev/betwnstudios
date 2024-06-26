import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import ShineBorder from "./animation/shine-border";
import AnimatedGradientText from "./animation/animated-gradient-text";
export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedGradientText>
            ⭐️ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Validated systems
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-5">
            Trusted by startups
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ShineBorder
              className="flex flex-col px-4 py-8 text-center w-full"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Sales
              </dt>

              <dd className="text-4xl font-extrabold md:text-5xl">$4.8m</dd>
            </ShineBorder>
            <ShineBorder
              className="flex flex-col px-4 py-8 text-center w-full"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd className="text-4xl font-extrabold md:text-5xl">24</dd>
            </ShineBorder>
            <ShineBorder
              className="flex flex-col px-4 py-8 text-center w-full"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-extrabold md:text-5xl">86</dd>
            </ShineBorder>
            {/* <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Sales
              </dt>

              <dd className="text-4xl font-extrabold md:text-5xl">$4.8m</dd>
            </div> */}

            {/* <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd className="text-4xl font-extrabold  md:text-5xl">24</dd>
            </div> */}

            {/* <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-extrabold  md:text-5xl">86</dd>
            </div> */}
          </dl>
        </div>
      </div>
    </section>
  );
}
