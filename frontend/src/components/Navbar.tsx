"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className=" bg-white px-4 lg:px-6 py-4">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <Link className="flex gap-2 items-center py-2" href={"/"}>
              <img src="/logo.png" alt="logo" className="w-7" />
              <h2 className="text-base font">EatToWealth</h2>
            </Link>

            <div
              className="lg:hidden text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>

            <ul className=" hidden lg:flex items-center tracking-wide text-sm gap-[39px] font text-green-600">
              <li>
                <Link className="hover:text-amber-600" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-600" href={"/about"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-600" href={"#services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-600" href={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-600" href={"/community"}>
                  Community
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-600" href={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="flex gap-4 items-center">
                <Link
                  href={"/sign-up"}
                  className="border-2 text-green-600 border-green-600 px-6 py-2 rounded-[5px] hover:border-amber-600 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 text-green-600 group-hover:text-white transition-colors duration-300">
                    SignUp
                  </span>
                </Link>

                <Link
                  href={"/login"}
                  className="border-2 border-amber-600 bg-amber-600 text-white rounded-[5px] px-6 py-2 hover:border-green-600 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-green-600 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">LogIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-16 z-30 left-0 w-full bg-white shadow-md lg:hidden px-6 py-4 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-200"
        }`}
      >
        <ul className="flex flex-col gap-4 text-green-600 tracking-wide">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Service
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/community" onClick={() => setMenuOpen(false)}>
              Community
            </Link>
          </li>
          <li>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li className="flex flex-col gap-3 mt-2">
            <Link
              href={"/sign-up"}
              className="border-2 text-green-600 border-green-600 px-4 py-2 rounded hover:bg-amber-600 hover:text-white hover:border-amber-600"
            >
              SignUp
            </Link>
            <Link
              href={"/login"}
              className="border-2 border-amber-600 bg-amber-600 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              LogIn
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicking outside */}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-20 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* END MOBILE MENU */}
    </>
  );
}

export default Navbar;
