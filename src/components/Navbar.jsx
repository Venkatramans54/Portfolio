import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("skills");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 160;
      let currentSection = navLinks[0]?.id;
      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 8;

      if (pageBottom) {
        setActiveSection(navLinks[navLinks.length - 1]?.id);
        return;
      }

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (marker >= sectionTop && marker < sectionBottom) {
          currentSection = nav.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="nav-styles justify-end sm:px-16 px-6"
    >
      {/* List of links */}
      <ul className="list-none sm:flex hidden justify-end items-center p-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              activeSection === nav.id
                ? "text-teal-100"
                : "text-white hover:text-teal-200"
            }`}
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
            <span
              className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-200 via-teal-300 to-cyan-400 transition-all duration-300 ${
                activeSection === nav.id ? "w-[78%] opacity-100" : "w-0 opacity-0"
              }`}
            />
          </li>
        ))}
      </ul>

      {/* only for mobile devices, created separately */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* shows toggle icon based on its state */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // correct way to change state using the prev
          // version of the same state using a callback function
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2
        min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } ${activeSection === nav.id ? "text-teal-200" : "text-white"}`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
