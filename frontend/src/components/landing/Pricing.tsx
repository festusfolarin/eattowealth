import Link from "next/link";
import { Check } from "lucide-react";

function Pricing() {
  return (
    <section className="py-10 bg-[#F6FAFA] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8 text-[#0F993E]">
        <div className="max-w-3xl mx-auto text-center ">
          <h6 className="mb-7 text-green-700 bg-[#EDF5F5] w-fit rounded-full mx-auto px-5 py-1 text-[#12B347]">
            Pricing plans
          </h6>
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Invest in Your Nutrition Journey
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed">
            Choose the plan that fits your goals and lifestyle. All plans
            include access to our supportive community.
          </p>
          <label className="mt-5 relative inline-flex gap-2 items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" value="" />
            <div className="group peer bg-[#12B347] rounded-full duration-300 w-12 h-6 after:duration-300 after:bg-[#12B347] after:bg-white peer-checked:after:bg-white  after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95"></div>
            <span>
              Annual pricing <span className="text-green-700">(save 20%)</span>
            </span>
          </label>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          <div className="overflow-hidden bg-white border-2 border-gray-100 hover:border-amber-600 rounded-md">
            <div className="py-10">
              <h3 className="text-xl font-medium text-[#12B347]">Free Plan</h3>
              <p className="text-3xl font-semibold text-black mt-7">₦0/mth</p>
              <p className="mt-3 text-sm">Billed annually</p>

              <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Community forum access</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Basic Health Analytics</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>AI-Powered Meal Planning (Limited)</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Food supplier directory access</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Email support</span>
                </li>
              </ul>

              <div className="p-10 mt-10 pt-0 bg-[#F6FAFA]">
                <Link
                  href={"#"}
                  className="inline-flex bg-[#12B347] w-full items-center justify-center px-10 py-4 mt-10 tracking-wider text-white transition-all duration-200 rounded-lg hover:opacity-80 focus:opacity-80"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border-2 border-gray-100 hover:border-amber-600 rounded-md shadow-lg">
            <div className="py-10">
              <h3 className="text-xl font-medium text-[#12B347]">
                Standard Plan
              </h3>
              <p className="text-3xl font-semibold text-black mt-7">
                ₦20,000/mth
              </p>
              <p className="mt-3 text-sm">Billed annually</p>

              <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Everything in Starter Plan</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Personalized nutrition assessment</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Custom meal plans & shopping lists</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>2 coaching sessions per month</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>10% discount with partner suppliers</span>
                </li>
              </ul>

              <div className="p-10 mt-10 pt-0 bg-[#F6FAFA]">
                <Link
                  href={"#"}
                  className="inline-flex bg-[#12B347] w-full items-center justify-center px-10 py-4 mt-10 tracking-wider text-white transition-all duration-200 rounded-lg hover:opacity-80 focus:opacity-80"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border-2 border-gray-100 hover:border-amber-600 rounded-md">
            <div className="py-10">
              <h3 className="text-xl font-medium text-[#12B347]">
                Premium Plan
              </h3>
              <p className="text-3xl font-semibold text-black mt-7">
                ₦50,000/mth
              </p>
              <p className="mt-3 text-sm">Billed annually</p>

              <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Everything in Complete Plan</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Unlimited Consultations (60 min)</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Advanced nutrition & health testing</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>Exclusive Community Workshops</span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <Check
                    size={20}
                    color="#ffffff"
                    strokeWidth={3}
                    className="bg-[#0F993E] p-1 rounded-full"
                  />
                  <span>20% discount with partner suppliers</span>
                </li>
              </ul>

              <div className="p-10 mt-10 pt-0 bg-[#F6FAFA]">
                <Link
                  href={"#"}
                  className="inline-flex bg-[#12B347] w-full items-center justify-center px-10 py-4 mt-10 tracking-wider text-white transition-all duration-200 rounded-lg hover:opacity-80 focus:opacity-80"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
