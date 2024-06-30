import Image from "next/image";
import dashboard_light from "@/public/dashboard-light.png";
import Link from "next/link";
import ShimmerButton from "./animation/shimmer-button";
export default function Example() {
  return (
    <div id="consultation" className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="relative isolate overflow-hidden bg-gray-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#E0E0E0" />
                <stop offset={1} stopColor="#808080" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              1 on 1 Consultation?
              <br />
              Schedule your call here.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 mb-2">
              If you are unsure about what you want out of us, book a call with
              us for absolutely free.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/calcom">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                    Book a consultation
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={dashboard_light}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
