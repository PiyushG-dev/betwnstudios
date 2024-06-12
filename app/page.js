import Blog from "@/components/Blog";
import { Dashboard } from "@/components/Dashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoClouds from "@/components/LogoClouds";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="w-full px-6 sm:px-0">
        <Dashboard />
      </div>
      <LogoClouds />
      <Features />
      <Testimonial />
      <Pricing />
      <Newsletter />
      <Blog />
      <Footer />
    </div>
  );
}
