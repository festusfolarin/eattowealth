"use client";
import Link from "next/link";
import { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "What nutrition services do you offer?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      question: "What nutrition services do you offer?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      question: "Are your nutritionists certified?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      question: "How do I get started?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      question: "Do I need to log meals every day?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className=" mx-auto mt-4 text-xl leading-relaxed text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border-b-2 border-gray-400 cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full py-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-black">{faq.question}</span>

                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke="#0D9344"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="py-10 bg-[#F9FAFB] mt-20 rounded-4xl shadow-md">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 -mr-3 overflow-hidden  border-3 border-white rounded-full">
                  <img
                    className="object-cover w-full h-full bg-[#ABB677]"
                    src="images/homepage/support2.png"
                    alt=""
                  />
                </div>

                <div className="relative overflow-hidden  border-3 border-white rounded-full w-15 h-15">
                  <img
                    className="object-cover w-full h-full bg-[#C7B9DA]"
                    src="images/homepage/support.png"
                    alt=""
                  />
                </div>

                <div className="w-12 h-12 -ml-3 overflow-hidden  border-3 border-white rounded-full">
                  <img
                    className="object-cover w-full h-full bg-[#D9B9BB]"
                    src="images/homepage/support3.png"
                    alt=""
                  />
                </div>
              </div>

              <h2 className="mt-8 text-xl leading-tight text-black">
                Still have questions?
              </h2>
              <p className="max-w-2xl mx-auto mt-6 text-gray-600">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>

              <Link
                href={"#"}
                className="inline-flex items-center justify-center px-6 py-2 mt-8 text-white transition-all duration-200 bg-[#0D9344] border border-transparent rounded-md  hover:bg-amber-600 focus:bg-amber-600"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Faq;
