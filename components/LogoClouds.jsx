import Image from "next/image";
import nextjs from "@/public/tech/next.svg";
import figma from "@/public/tech/figma.svg";
import github from "@/public/tech/github.svg";
import shadcn from "@/public/tech/shadcnui.svg";
import aws from "@/public/tech/aws.svg";
// import { logoClouds } from "@/constants";

export default function LogoClouds() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8">
          Industry standard design and development processes for performance
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src={github}
            alt="github"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src={aws}
            alt="aws"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src={nextjs}
            alt="next-js"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-14 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={figma}
            alt="figma"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={shadcn}
            alt="shadcnui"
            width={158}
            height={48}
          />
          {/* {logoClouds.map((item, i) => {
            return (
              <Image
                className="clouds col-span-2 col-start-2 max-h-14 w-full object-contain lg:col-span-1"
                src={item}
                alt={item}
                key={i}
                width={158}
                height={48}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
