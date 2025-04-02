import { useState } from "react";
import { LanguageSwitcher } from "../common/LanguageSwitcher"; // Ajustá la ruta si es distinta
import { TranslatableText } from "../common/TranslatableText";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const staticPaws = [
    { id: 1, top: "5px", left: "0%" },
    { id: 2, top: "0px", left: "45%" },
    { id: 3, top: "45px", left: "50%" },
    { id: 4, top: "0px", left: "75%" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="/assets/cropped-M-Logo.png"
              alt="MoPetCo Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Huellitas Estáticas */}
        {staticPaws.map((paw) => (
          <img
            key={paw.id}
            src="/assets/pawprint.png"
            alt="Paw Print"
            className="w-5 h-5 absolute opacity-30"
            style={{ top: paw.top, left: paw.left }}
          />
        ))}

        {/* Navegación Desktop */}
        <nav className="hidden md:flex space-x-6 md:space-x-2 lg:space-x-6  items-center z-10">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium md:text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium text-center md:text-sm"
          >
            <TranslatableText text="About" />
          </a>
          <a
            href="/service"
            className="text-gray-700 hover:text-blue-600 font-medium text-center md:text-sm"
          >
            <TranslatableText text="Services" />
          </a>
          <a
            href="/gallery"
            className="text-gray-700 hover:text-blue-600 font-medium text-center md:text-sm"
          >
            <TranslatableText text="Gallery" />
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium text-center md:text-sm"
          >
            <TranslatableText text="Contact" />
          </a>
          <a
            href="/release-form"
            className="text-gray-700 hover:text-blue-600 font-medium text-center md:text-sm"
          >
            <TranslatableText text="Release Form" />
          </a>
          <a
            href="/faqs"
            className="text-gray-700 hover:text-blue-600 font-medium md:text-sm"
          >
            <TranslatableText text="FAQs" />
          </a>
        </nav>

        {/* Language Switcher alineado a la derecha */}
        <div className="hidden md:flex lg:mr-2 items-center">
          <LanguageSwitcher />
        </div>

        {/* Botón Hamburguesa Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navegación Mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-auto bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-6 space-y-4 mt-16 flex flex-col items-center">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            <TranslatableText text="About Us"/>
          </a>
          <a
            href="/service"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            <TranslatableText text="Services"/>
          </a>
          <a
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            <TranslatableText text="Gallery"/>
          </a>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            <TranslatableText text="Contact"/>
          </a>
          <a
            href="/release-form"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            <TranslatableText text="Release Form"/>
          </a>
          <a
            href="/faqs"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            <TranslatableText text="FAQs"/>
          </a>

          {/* Language Switcher para Mobile */}
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
