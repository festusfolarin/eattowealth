import Link from "next/link";

function Hero() {
  return (
    <section className="relative py-25 bg-[url('/images/homepage/hero2.jpg')] bg-no-repeat bg-cover  px-4 lg:px-6 md:py-44">
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/95 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl leading-tight tracking-wide">
              Your Path to a <span className="text-[#0D9344]">Healthier</span>{" "}
              Lifestyle Starts Here
            </h1>

            <p className="mt-8 text-base text-white sm:text-xl leading-normal">
              Get personalized lifestyle, expert consulting, and community
              support tailored just for you.
            </p>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Link
                href={"#"}
                className="rounded-xl inline-flex items-center justify-center px-10 py-3.5 text-base font-medium text-white transition-all duration-200 border-2 border-white hover:bg-amber-600 hover:border-amber-600"
              >
                Explore Services
              </Link>

              <Link
                href={"#"}
                title=""
                className="rounded-xl inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-200 bg-[#0D9344] hover:bg-amber-600"
              >
                Book Appointment
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
