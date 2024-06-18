import Marquee from "@/components/animation/marquee";
import Image from "next/image";
import { logoCloudsOne, logoCloudsTwo } from "@/constants";
const LogoCloud = ({ img }) => {
  return (
    <Image
      className="h-14"
      src={img}
      alt="logo-cloud"
      width={158}
      height={48}
    />
  );
};

const MarqueeDemo = () => {
  return (
    <div className="mx-auto relative flex h-full max-w-screen-xl flex-col items-center justify-center overflow-hidden bg-background py-20">
      <h2 className="text-center text-lg font-semibold leading-8">
        Industry standard design and development processes for performance
      </h2>
      <Marquee pauseOnHover className="[--duration:20s] mt-20">
        {logoCloudsOne.map((cloud, i) => (
          <LogoCloud key={i} img={cloud} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-20">
        {logoCloudsTwo.map((cloud, i) => (
          <LogoCloud key={i} img={cloud} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
