import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* WRAPPER NAVBAR */}
      <div
        className="
          fixed top-0 sm:left-12 sm:right-12 left-5 right-5 
          py-5 md:py-7 
          flex items-center justify-between
          bg-[#1c1c1c]
          gap-3
          text-white 
          z-50
        "
      >
        {/* LOGO */}
        <div className="hover:bg-[#323232] px-2 py-1 rounded-2xl max-w-[70%]">
          <a href="#Home" className="flex items-center gap-2 overflow-hidden">
            <img
              src="/assets/logo-SA.png"
              alt="Logo"
              className="w-5 sm:w-7 h-auto"
            />
            <p className="font-poppins text-lg sm:text-xl md:text-2xl font-bold truncate">
              suryaatmaja
            </p>
          </a>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <img
              src="/assets/menu.png"
              alt="Open menu"
              className="w-7 h-7 object-contain"
            />
          ) : (
            <img
              src="/assets/close.png"
              alt="Close menu"
              className="w-7 h-7 object-contain"
            />
          )}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center lg:gap-10 gap-4 font-poppins">
          <li>
            <a href="#Home" className="text-lg font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="text-lg font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="text-lg font-medium">
              Skills
            </a>
          </li>
          <li>
            <a href="#Tools" className="text-lg font-medium">
              Tools
            </a>
          </li>
          <li>
            <a href="#Project" className="text-lg font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-lg font-medium">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-250 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR (SLIDE DARI KANAN) */}
      <div
        className={`
          fixed top-0 right-0 h-full 
          w-[60%] max-w-xs
          bg-zinc-900 text-white font-poppins 
          z-300
          transform transition-transform duration-300 
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER SIDEBAR */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-700">
          <span className="text-xl font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 flex items-center justify-center"
            aria-label="Close menu"
          >
            <img
              src="/assets/close.png"
              alt="Close menu"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-4 px-6 py-6">
          <li>
            <a
              href="#Home"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Tools"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </a>
          </li>
          <li>
            <a
              href="#Project"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
