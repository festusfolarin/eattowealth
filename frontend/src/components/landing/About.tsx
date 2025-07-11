"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation 50px before element comes into view
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b bg-white px-4 lg:px-6 py-16 overflow-x-hidden"
    >
      <div className=" mx-auto max-w-screen-xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-800 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-4xl font-medium text-black md:text-4xl leading-tight">
              Who We Are
            </h2>

            <p className="mt-8 text-black leading-normal">
              <span className="text-[#0F993E] font-medium">Eat2Wealth</span> is
              a digital health and nutrition platform offering personalized
              nutrition plans, expert support from registered dietitians, and a
              vibrant community. We empower individuals, families, and
              organizations to achieve their health goals through science-backed
              guidance and preventive wellness strategies. Our focus is on
              sustainable, healthy living and disease prevention.
              <br />
              <br />
              Our team are experts who are registered and specialize in various
              sectors of health, qualified to answer nutritional questions to
              help you achieve your nutritional goals.
            </p>
            <ul className="py-5 leading-loose md:leading-8">
              {/* Did a temporary mobile width fix for the checkboxes here */}
              <li className="flex md:items-center gap-3">
                <Check
                  size={22}
                  color="#ffffff"
                  strokeWidth={3}
                  className="bg-[#0F993E] w-6 sm:w-5.5 p-1 mt-1 sm:mt-0 rounded-full"
                />
                <span>Certified nutritionists and health coaches</span>
              </li>
              <li className="flex md:items-center gap-3">
                <Check
                  size={22}
                  color="#ffffff"
                  strokeWidth={3}
                  className="bg-[#0F993E] w-8 sm:w-5.5 p-1 mt-1 sm:mt-0 rounded-full"
                />
                <span>
                  Join a supportive network where you can share your journey
                </span>
              </li>
              <li className="flex md:items-center gap-3">
                <Check
                  size={22}
                  color="#ffffff"
                  strokeWidth={3}
                  className="bg-[#0F993E] w-7 sm:w-5.5  p-1 mt-1 sm:mt-0 rounded-full"
                />

                <span>
                  Tailored programs designed to fit your unique lifestyle
                </span>
              </li>
            </ul>

            <div className="mt-3 sm:flex sm:items-center sm:space-x-8">
              <Link
                href={"#"}
                className="rounded-xl bg-amber-600 inline-flex items-center justify-center px-10 py-3.5 text-white transition-all duration-200 border-2  hover:bg-[#0F993E]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-800 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              className="w-full md:h-[570px] object-cover rounded-3xl"
              src="/images/homepage/about.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
