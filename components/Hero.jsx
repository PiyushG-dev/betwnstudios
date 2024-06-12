import { Button } from "./ui/button";
import RetroGrid from "./ui/retro-grid";

export default function Hero() {
  return (
    <div>
      <RetroGrid />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-foreground">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
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
            <div className="mt-10 flex items-center justify-center gap-x-3">
              <Button>Get Started</Button>
              <Button variant="link">Learn more →</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
