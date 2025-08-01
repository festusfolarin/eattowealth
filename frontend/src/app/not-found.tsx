import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />
      <section className="bg-white ">
        <div className="py-34 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-[#0D9344]">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-semibold text-gray-900 md:text-4xl ">
              Page not found.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              Sorry, we cannot find that page. <br />
              You will find lots to explore on the home page.
            </p>
            <Link
              href={"/"}
              className="inline-flex text-white bg-[#0D9344] hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
