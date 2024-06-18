import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <AnimatedBeamDemo />
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We will get back to you
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button>say hi</Button>
            </div>
          </div>
          {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold ">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold">No spam</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl> */}
        </div>
      </div>
    </div>
  );
}
