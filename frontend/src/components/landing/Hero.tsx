"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-16 z-10 md:py-20 lg:py-0 px-4 lg:px-6 lg:-my-34 xl:-my-64 overflow-x-hidden">
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e4fdcd] to-[#e6fef5]"></div>

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
            <h1 className="text-4xl hidden sm:block font-bold text-black md:text-5xl leading-tight tracking-wide">
              Your Path to a <span className="text-[#0D9344]">Healthier</span>{" "}
              Lifestyle Starts Here
            </h1>
            <h1 className="text-4xl sm:hidden font-bold text-black md:text-5xl leading-tight tracking-wide">
              Your Path to a{" "}
              <span className="text-[#0D9344]">Healthier You</span> Starts Here
            </h1>

            <p className="mt-4 lg:w-xl text-base text-black sm:text-xl leading-normal">
              Get personalized lifestyle, expert consulting, and community
              support tailored just for you.
            </p>

            <div className="mt-6 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-7">
              <Link
                href="https://wa.me/message/7DXGUOWDEXIEE1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-200 bg-[#0D9344] relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Book Appointment</span>
              </Link>

              <Link
                href={"#services"}
                className="rounded-xl inline-flex items-center justify-center px-10 py-3.5 text-base font-medium text-black transition-all duration-200 border-2 border-black hover:text-white hover:border-amber-600 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Explore Services</span>
              </Link>
            </div>

            <div className="mt-8 lg:mt-12 flex gap-3 items-center">
              <div className="flex flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                <img
                  className="inline-block rounded-full w-10 h-10  object-cover"
                  src="images/homepage/reviewer.jpg"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-10 h-10  object-cover"
                  src="images/homepage/trustee1.jpg"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-10 h-10  object-cover"
                  src="images/homepage/trustee2.jpg"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-10 h-10  object-cover"
                  src="images/homepage/trustee3.jpg"
                  alt=""
                />
              </div>

              <p className=" text-sm font-semibold md:text-md text-black lg:mt-0 lg:ml-2 font-pj">
                Trusted by 5000+
              </p>
            </div>
          </div>

          <div>
            <img
              className="md:min-w-[130%] -mt-6 sm:-ml-20"
              src="/images/homepage/image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
