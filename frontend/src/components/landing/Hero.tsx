"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-25 bg-[url('/images/homepage/hero-new.png')] bg-center bg-no-repeat bg-cover  px-4 lg:px-6 md:py-44">
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/95 via-transparent  to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl leading-tight tracking-wide">
              Your Path to a <span className="text-[#0D9344]">Healthier</span>{" "}
              Lifestyle Starts Here
            </h1>

            <p className="mt-8 lg:w-xl text-base text-white sm:text-xl leading-normal">
              Get personalized lifestyle, expert consulting, and community
              support tailored just for you.
            </p>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Link
                href={"#"}
                className="rounded-xl inline-flex items-center justify-center px-10 py-3.5 text-base font-medium text-white transition-all duration-200 border-2 border-white hover:border-amber-600 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Explore Services</span>
              </Link>

              <Link
                href={"#"}
                title=""
                className="rounded-xl inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-200 bg-[#0D9344] relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Book Appointment</span>
              </Link>
            </div>
          </div>

          {/* <div>
        <img className="w-full" src="/images/homepage/image.png" alt="" />
      </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
