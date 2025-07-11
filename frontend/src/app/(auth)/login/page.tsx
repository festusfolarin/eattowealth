import GoogleIcon from "@/components/auth/GoogleIcon";
import AppleIcon from "@/components/auth/AppleIcon";
// import FacebookIcon from "@/components/auth/FacebookIcon";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log In | Eat To Wealth",
  description: "Welcome back to Eat To Wealth",
};

function LogIn() {
  return (
    <main>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:-order-1 relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="/images/signup/login.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0  bg-gradient-to-t from-[#0D9344] via-transparent to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto">
                <h3 className="text-4xl font-semibold text-white">
                  Expert Guidance
                </h3>
                <p className="mt-2 text-white">
                  Gain access to registered dietitians and nutrition specialists
                  who can provide expert guidance tailored to your unique needs.
                  Whether you&apos;re managing dietary restrictions, pursuing
                  specific health goals, or simply seeking balanced eating
                  advice, these professionals will help you personalize your
                  nutrition plan for optimal results.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-gray-500 sm:text-4xl">
                Welcome back 👋
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href={"/sign-up"}
                  className="font-medium text-[#12B347] transition-all duration-200 hover:underline"
                >
                  Create free account
                </Link>
              </p>

              <form className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href={"/forgot-password"}
                      className="text-sm text-[#0D9344] transition-all duration-200 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-[#12B347] w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>

              <div className="flex items-center justify-between mt-6">
                <hr className="w-full border-gray-200" />
                <span className="px-3 text-sm text-gray-500">or</span>
                <hr className="w-full border-gray-200" />
              </div>

              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 inset-y-auto left-0 p-4">
                    <GoogleIcon />
                  </div>
                  Sign in with Google
                </button>

                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 inset-y-auto left-0 p-4">
                    <AppleIcon />
                  </div>
                  Sign in with Apple
                </button>

                {/* <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 inset-y-auto left-0 p-4">
                    <FacebookIcon />
                  </div>
                  Sign up with Facebook
                </button> */}
              </div>

              <p className="mt-5 text-sm text-gray-600">
                By signing in and creating an account, you agree with our{" "}
                <Link
                  href={"/terms-of-service"}
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service{" "}
                </Link>
                &{" "}
                <Link
                  href={"/privacy-policy"}
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LogIn;
