import Particles from "@/components/animation/particles";

const ParticlesDemo = ({ words }) => {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden bg-background p-4">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black md:text-9xl">
        {words}
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#000000"
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
