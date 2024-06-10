import Blog from "@/components/Blog";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoClouds from "@/components/LogoClouds";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LogoClouds />
      <Testimonial />
      <Pricing />
      <Newsletter />
      <Blog />
      <Footer />
    </>
  );
}
