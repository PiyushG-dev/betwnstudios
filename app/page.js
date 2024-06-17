import Blog from "@/components/Blog";
import Workflow from "@/components/Workflow";
import { Dashboard } from "@/components/Dashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoClouds from "@/components/LogoClouds";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import ParticlesDemo from "@/components/ParticlesDemo";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="w-full px-6 sm:px-0">
        <Dashboard />
      </div>
      <LogoClouds />
      <ParticlesDemo words="Just betwn us" />
      <Features />
      <Workflow />
      <Testimonial />
      <Pricing />
      <Newsletter />
      <ParticlesDemo words="betwn studios" />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}
