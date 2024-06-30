import Workflow from "@/components/Workflow";
import { Dashboard } from "@/components/Dashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Testimonial from "@/components/Testimonial";
import ParticlesDemo from "@/components/ParticlesDemo";
import MarqueeDemo from "@/components/MarqueeDemo";
import Stats from "@/components/Stats";
import { BentoGridSecondDemo } from "@/components/BentoGridDemo";
import CalcomIntegration from "@/components/features/calcom-integration";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="w-full px-6 sm:px-0">
        <Dashboard />
      </div>
      <MarqueeDemo />
      <ParticlesDemo words="Just betwn us" />
      <Features />
      <Stats />
      <Workflow />
      <Testimonial />
      <div>
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2">
            Get in touch with us directly
          </h2>
        </div>
        <CalcomIntegration />
      </div>
      <BentoGridSecondDemo />
      <Newsletter />
      {/* <Pricing /> */}
      <ParticlesDemo words="betwn studios" />
      <Footer />
    </div>
  );
}
