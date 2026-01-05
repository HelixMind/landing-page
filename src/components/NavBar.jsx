// react
import React, { useState } from "react";

// lucide-react
import { ChevronDown } from "lucide-react";

// react-router
import { Link } from "react-router";
import { NavLink } from "react-router";

// lib
import {cn} from "../lib/utils.js"

// ui
import { Button } from "./ui/button";

// constants
import { navLinks } from "../../constants";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit max-w-2xl h-14 bg-[#1b1b1b]/10 backdrop-blur-md border-2 border-[#b0e545]/20 scale-95 rounded-full px-6 flex items-center justify-between lg:gap-16">
        {/* Logo */}
        <div
          className="flex items-center gap-2 hover:-translate-y-1 transition duration-200"
          onClick={() => window.location.reload()}
        >
          <Link to="/" className="flex item-center gap-2">
            <img src="./logo.png" alt="" className="w-5 h-5" />
            <span className="mr-6 lg:mr-0 font-semibold text-base font-['Inter'] text-white cursor-pointer">
              HelixMind
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  className={({isActive}) => cn(
                    "text-sm text-zinc-300 hover:text-primary hover:-translate-y-1 transition duration-300 inline-block",
                    isActive && "text-primary"
                  )}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="https://helix-mind.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full lg:w-fit"
          >
            <Button
              id="#CaSection"
              className="capitalize"
            >
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center gap-1 text-white"
        >
          <ChevronDown
            className={`w-7 h-7 transition-all duration-300 ${
              open ? "rotate-180 text-primary" : "rotate-0"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 backdrop-blur-md z-40 transition-opacity duration-300"
        />
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          fixed top-[88px] left-1/2 -translate-x-1/2
          w-[90%] max-w-2xl
          bg-[#1b1b1b]/25 backdrop-blur-md border border-white/10 
          rounded-2xl shadow-xl
          transition-all duration-300
          z-50
          ${open ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <ul className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)} // <-- Close menu when clicked
                className="text-white text-base font-medium hover:text-indigo-300 transition duration-200"
              >
                {link.title}
              </Link>
            </li>
          ))}

          <a
            href="https://helix-mind.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              onClick={() => setOpen(false)}
              className="text-base mt-4 bg-gradient-to-r from-[#b0e545] to-[#8ac122]
 px-4 py-3 rounded-full text-black clash-display hover:-translate-y-1 transition duration-200 shadow-indigo-900 capitalize"
            >
              Get Started
            </button>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
