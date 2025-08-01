import Link from "next/link";

function Footer() {
  return (
    <footer className="py-10 bg-black text-white text-sm sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* SUBSCRIPTION FORM */}

        <div className="relative bg-[#0d9344] mb-20 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-34 -left-34 w-64 h-64 border-7 border-white/30 rounded-full"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-white text-2xl md:text-5xl leading-tight font-medium mb-6">
              Subscribe to our <br /> newsletter
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 font-light px-4 py-3 rounded-lg border border-white  text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
              />

              <input
                type="email"
                placeholder="Email address"
                className="flex-1 font-light px-4 py-3 rounded-lg border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
              />

              <Link
                href={"#"}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe Now
              </Link>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute -bottom-34 -right-34 w-64 h-64 border-7 border-white rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8 -my-4.5">
            <Link className="flex gap-2 items-center py-2" href={"/"}>
              <img src="/logo.png" alt="logo" className="h-9" />
              <h2 className="text-base font">EatToWealth</h2>
            </Link>

            <p className="font-light text-sm md:w-60 leading-relaxed my-7">
              EatWealth aims to combat malnutrition through digital and
              personalized nutrition solutions.
            </p>
            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-[#0F993E] rounded-full w-7 h-7 focus:bg-[#0F993E] hover:text-white focus:text-white hover:bg-[#0F993E] hover:border-[#0F993E] focus:border-[#0F993E]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-[#0F993E] rounded-full w-7 h-7 focus:bg-[#0F993E] hover:text-white focus:text-white hover:bg-[#0F993E] hover:border-[#0F993E] focus:[#0F993E]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-[#0F993E] rounded-full w-7 h-7 focus:bg-[#0F993E] hover:text-white focus:text-white hover:bg-[#0F993E] hover:border-[#0F993E] focus:border-[#0F993E]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-[#0F993E] rounded-full w-7 h-7 focus:bg-[#0F993E] hover:text-white focus:text-white hover:bg-[#0F993E] hover:border-[#0F993E] focus:border-[#0F993E]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className=" font-medium uppercase">Company</p>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-medium  uppercase">Help</p>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Customer Support
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-medium  uppercase">Services</p>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Meal Planning
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Meal Tracking
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Child Nutrition
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-medium  uppercase">Resources</p>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Free eBook
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Tutorials
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  Daily Tips
                </Link>
              </li>

              <li>
                <Link
                  href={"#"}
                  className="flex font-light transition-all duration-200 hover:text-[#0F993E] focus:text-[#0F993E]"
                >
                  YouTube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-500" />

        <div className="text-center">
          <p className="text-sm text-gray-500">
            © Copyright 2021, All Rights Reserved by EatToWealth
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
