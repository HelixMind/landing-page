// react-router
import { NavLink } from "react-router";

// lib
import { cn } from "../lib/utils.js";

import { LuCommand } from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { legal, forDevelopers ,footerNavItems } from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#0A0A0A]/80 border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="centered-row gap-2 cursor-pointer hover:-translate-y-1 transition2">
                <img src="./logo.png" alt="" className="w-6 h-6" />
                {/* <LuCommand className="w-6 h-6 text-indigo-400" /> */}

                <h3 className="font-['Inter'] text-lg text-zinc-100 font-semibold">
                  HelixMind
                </h3>
              </div>

              <p className="text-sm text-zinc-400/90">
                Transform your research with HelixMind’s cutting-edge AI tools.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <button className="hover:text-indigo-400 transition-colors ">
                  <FaInstagram className="w-6 h-6" />
                </button>

                <button className="hover:text-indigo-400 transition-colors">
                  <FaFacebookF className="w-6 h-6" />
                </button>

                <button className="hover:text-indigo-400 transition-colors">
                  <FaLinkedinIn className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Footer Links */}

            {/* pages */}
            <div className="space-y-4">
              <h4 className="clash-display text-base text-zinc-200 font-medium">
                Pages
              </h4>
              <ul className="space-y-2">
                {footerNavItems.map(({ _id, title, href }) => (
                  <li key={_id}>
                    <NavLink
                      key={_id}
                      to={href}
                      className={({ isActive }) =>
                        cn(
                          "text-sm text-zinc-400 hover:text-primary hover:ml-3 transition2",
                          isActive && "text-primary"
                        )
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* for developers */}
            <div className="space-y-4">
              <h4 className="clash-display text-base text-zinc-200 font-medium capitalize">
                For Developers
              </h4>
              <ul className="space-y-2">
                {forDevelopers.map(({ _id, title, href }) => (
                  <li key={_id}>
                    <a
                      key={_id}
                      href={href}
                      className="text-sm text-zinc-400 hover:text-primary hover:ml-3 transition2"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* legal */}
            <div className="space-y-4">
              <h4 className="clash-display text-base text-zinc-200 font-medium capitalize">
                Legal
              </h4>
              <ul className="space-y-2">
                {legal.map(({ _id, title, href }) => (
                  <li key={_id}>
                    <a
                      key={_id}
                      href={href}
                      className="text-sm text-zinc-400 hover:text-primary hover:ml-3 transition2"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-zinc-400/80 text-center montserrat">
              &copy; {new Date().getFullYear()} HelixMind. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
