import Link from "next/link";
import { MoveRight } from "lucide-react";

function Community() {
  return (
    <section className="bg-gradient-to-b bg-white px-4 lg:px-6 py-22">
      <div className=" mx-auto max-w-screen-xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-medium text-black md:text-4xl leading-tight">
              Join Our Community
            </h2>
            <p className="mt-3 font-medium">
              Connect with others to share, learn, and grow.
            </p>

            <p className="mt-5 text-black leading-normal">
              Be part of a vibrant community where you can join nutrition
              workshops, swap recipes in forums, and support each other’s health
              goals. Together, we make wellness fun and sustainable.
            </p>

            <div className="mt-5 sm:flex sm:items-center sm:space-x-8">
              <Link
                href={"#"}
                className="rounded-xl flex gap-2 bg-amber-600 inline-flex items-center justify-center px-10 py-3.5 text-white transition-all duration-200 border-2 hover:bg-[#0F993E] group"
              >
                <span>Join now</span>
                <MoveRight
                  color="#ffffff"
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div>
            <img
              className="w-full object-cover rounded-3xl"
              src="/images/homepage/ourcommunity.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
