import Workflow from "@/components/Workflow";
import { Dashboard } from "@/components/Dashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import ParticlesDemo from "@/components/ParticlesDemo";
import MarqueeDemo from "@/components/MarqueeDemo";
import Stats from "@/components/Stats";
import ValueProp from "@/components/ValueProp";
import { Hero } from "@/components/Hero";

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
      <ValueProp />
      <ParticlesDemo words="betwn studios" />
      <Footer />
    </div>
  );
}
