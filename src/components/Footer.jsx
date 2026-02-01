// react-router
import { NavLink } from "react-router";

// lib
import { cn } from "../lib/utils.js";

// icons
import { SiCalendly } from "react-icons/si";

// constants
import { legal, forDevelopers, footerNavItems } from "../../constants";

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
                {/* Email */}
                <a
                  href="mailto:helixmind550@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"/></svg>
                </a>

                {/* Calendly */}
                <a
                  href="https://calendly.com/helixmind550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                  aria-label="Calendly"
                >
                  <SiCalendly className="w-6 h-6" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/HelixMind_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                  aria-label="X"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"/></svg>
                </a>

                {/* Phone */}
                <a
                  href="tel:+2348121295914"
                  className="hover:text-indigo-400 transition-colors"
                  aria-label="Phone"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M17.707 12.293a1 1 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a1 1 0 0 0 0-1.414zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414L9.586 7L8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.99.99 0 0 0 .912-.271L17 14.414L19.586 17z"/></svg>
                </a>
              </div>
            </div>

            {/* Pages */}
            <div className="space-y-4">
              <h4 className="clash-display text-base text-zinc-200 font-medium">
                Pages
              </h4>
              <ul className="space-y-2">
                {footerNavItems.map(({ _id, title, href }) => (
                  <li key={_id}>
                    <NavLink
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

            {/* For Developers */}
            <div className="space-y-4">
              <h4 className="clash-display text-base text-zinc-200 font-medium capitalize">
                For Developers
              </h4>
              <ul className="space-y-2">
                {forDevelopers.map(({ _id, title, href }) => (
                  <li key={_id}>
                    <a
                      href={href}
                      className="text-sm text-zinc-400 hover:text-primary hover:ml-3 transition2"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="clash-display text-base text-zinc-200 font-medium capitalize">
                Legal
              </h4>
              <ul className="space-y-2">
                {legal.map(({ _id, title, href }) => (
                  <li key={_id}>
                    <a
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
