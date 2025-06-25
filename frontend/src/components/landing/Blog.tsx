import Link from "next/link";
import { MoveRight } from "lucide-react";

function Blog() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h3 className="text-2xl mb-2 text-center font-medium leading-tight text-black sm:text-4xl">
            Our Blog
          </h3>
          <h2 className="text-3xl text-center font-medium leading-tight text-[#0D9344] sm:text-4xl lg:text-5xl">
            Our Latest News
          </h2>
          <p className="max-w-5xl text-center mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Dive into our blog for expert tips, delicious recipes, and inspiring
            stories that will help guide you on your nutritional journey. <br />{" "}
            Our articles cover a wide range of topics to educate, motivate, and
            support you in making healthier choices.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="relative">
              <Link href={"#"}>
                <img
                  className="object-cover w-full  h-[212px]"
                  src="images/homepage/card1.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-5 pb-6">
              <p className="mt-5 text-xl font-semibold">
                <Link href="#" title="" className="text-[#0D9344]">
                  How to boost your energy naturally by drinking healthy juice
                </Link>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Learn simple nutrition tweaks to feel more vibrant daily cos it
                helps to aids digestion and supplies hhe nutrient needed for the
                body...
              </p>
              <Link
                href={"#"}
                className=" flex gap-2  mt-5 text-amber-600 transition-all duration-200  group"
              >
                <span>Read more</span>
                <MoveRight
                  color="#E17100"
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="relative">
              <Link href={"#"}>
                <img
                  className="object-cover w-full h-[212px]"
                  src="images/homepage/card2.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-5 pb-6">
              <p className="mt-5 text-xl font-semibold">
                <Link href="#" title="" className="text-[#0D9344]">
                  How to boost your energy naturally by drinking healthy juice
                </Link>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Learn simple nutrition tweaks to feel more vibrant daily cos it
                helps to aids digestion and supplies hhe nutrient needed for the
                body...
              </p>
              <Link
                href={"#"}
                className=" flex gap-2  mt-5 text-amber-600 transition-all duration-200  group"
              >
                <span>Read more</span>
                <MoveRight
                  color="#E17100"
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="relative">
              <Link href={"#"}>
                <img
                  className="object-cover w-full h-[212px]"
                  src="images/homepage/card3.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-5 pb-6">
              <p className="mt-5 text-xl font-semibold">
                <Link href="#" title="" className="text-[#0D9344]">
                  How to boost your energy naturally by drinking healthy juice
                </Link>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Learn simple nutrition tweaks to feel more vibrant daily cos it
                helps to aids digestion and supplies hhe nutrient needed for the
                body...
              </p>
              <Link
                href={"#"}
                className=" flex gap-2  mt-5 text-amber-600 transition-all duration-200  group"
              >
                <span>Read more</span>
                <MoveRight
                  color="#E17100"
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-15 sm:flex max-w-fit mx-auto sm:items-center text-center sm:space-x-8">
          <Link
            href={"#"}
            className="rounded-xl flex gap-2 bg-[#0D9344] inline-flex items-center justify-center px-10 py-3.5 text-white transition-all duration-200 border-2 hover:bg-amber-600 group"
          >
            <span>Explore All Blogs</span>
            <MoveRight
              color="#ffffff"
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
