import Workflow from "@/components/Workflow";
import { Dashboard } from "@/components/Dashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import ParticlesDemo from "@/components/ParticlesDemo";
import MarqueeDemo from "@/components/MarqueeDemo";

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
      <Workflow />
      <Testimonial />
      <Newsletter />
      <Pricing />
      <ParticlesDemo words="betwn studios" />
      <Footer />
    </div>
  );
}
