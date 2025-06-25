import Hero from "@/components/landing/Hero";
import Ebook from "@/components/landing/Ebook";
import About from "@/components/landing/About";
import Pricing from "@/components/landing/Pricing";
import Partners from "@/components/landing/Partners";
import Testimonial from "@/components/landing/Testimonial";
import Faq from "@/components/landing/Faq";
import Blog from "@/components/landing/Blog";
import Services from "@/components/landing/Services";
import { Metadata } from "next";
import Community from "@/components/landing/Community";

export const metadata: Metadata = {
  title: "Eat To Wealth | Your Simple Guide To Eating Intelligently",
  description: "To improve eating habits and promote a healthier lifestyle.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Ebook />
      <About />
      <Services />
      <Community />
      <Blog />
      <Partners />
      <Pricing />
      <Faq />
      <Testimonial />
    </main>
  );
}
