import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { TranslatableText } from "../common/TranslatableText";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const staticPaws = [
    { id: 1, top: "5px", left: "0%" },
    { id: 2, top: "0px", left: "45%" },
    { id: 3, top: "45px", left: "50%" },
    { id: 4, top: "0px", left: "75%" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = (path: string) => currentPath === path;

  const navLinkClass = (path: string) =>
    `relative inline-block text-gray-700 font-medium transition-colors duration-300 md:text-sm after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 ${
      isActive(path)
        ? "text-pink-500 font-semibold after:bg-pink-500"
        : "hover:text-pink-700 after:bg-transparent"
    }`;

  return (
    <header className="bg-white shadow-md fixed w-full z-50 overflow-hidden">
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

        {/* Paw prints */}
        {staticPaws.map((paw) => (
          <img
            key={paw.id}
            src="/assets/pawprint.png"
            alt="Paw Print"
            className="w-5 h-5 absolute opacity-20"
            style={{ top: paw.top, left: paw.left }}
          />
        ))}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center z-10">
          <a href="/" className={navLinkClass("/")}>Home</a>
          <a href="/service" className={navLinkClass("/service")}>
            <TranslatableText text="Services" />
          </a>
          <a href="/gallery" className={navLinkClass("/gallery")}>
            <TranslatableText text="Gallery" />
          </a>
          <a href="/contact" className={navLinkClass("/contact")}>
            <TranslatableText text="Contact" />
          </a>
          <a href="/release-form" className={navLinkClass("/release-form")}>
            <TranslatableText text="Release Form" />
          </a>
          <a href="/faqs" className={navLinkClass("/faqs")}>
            <TranslatableText text="FAQs" />
          </a>
        </nav>

        {/* Language switcher (desktop) */}
        <div className="hidden lg:flex items-center mr-3">
          <LanguageSwitcher />
        </div>

        {/* Booking button (desktop) */}
        <Link
          to="/booking"
          className="hidden lg:inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-4 ya qu py-2 text-sm font-semibold shadow-md hover:shadow-lg transition duration-300"
        >
          <TranslatableText text="Book an appointment" />
        </Link>

        {/* Hamburger button (mobile + tablet) */}
        <button
          className="block md:block lg:hidden text-gray-700 focus:outline-none z-30 ml-2"
          title="Hamburger"
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

      {/* Mobile Navigation */}
      <div
        className={`block md:block lg:hidden fixed top-0 left-0 w-full h-auto bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full" 
        }`}
      >
        <div className="px-4 py-6 space-y-4 mt-16 flex flex-col items-center">
          <a href="/" onClick={() => setMenuOpen(false)} className={navLinkClass("/")}>
            Home
          </a>
          <a href="/service" onClick={() => setMenuOpen(false)} className={navLinkClass("/service")}>
            <TranslatableText text="Services" />
          </a>
          <a href="/gallery" onClick={() => setMenuOpen(false)} className={navLinkClass("/gallery")}>
            <TranslatableText text="Gallery" />
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass("/contact")}>
            <TranslatableText text="Contact" />
          </a>
          <a href="/release-form" onClick={() => setMenuOpen(false)} className={navLinkClass("/release-form")}>
            <TranslatableText text="Release Form" />
          </a>
          <a href="/promociones" onClick={() => setMenuOpen(false)} className={navLinkClass("/promociones")}>
            <TranslatableText text="Promotions" />
          </a>
          <a href="/faqs" onClick={() => setMenuOpen(false)} className={navLinkClass("/faqs")}>
            <TranslatableText text="FAQs" />
          </a>

          {/* Language switcher (mobile) */}
          <div className="mt-4">
            <LanguageSwitcher />
          </div>

          {/* Booking button (mobile) */}
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            <TranslatableText text="Book an appointment" />
          </Link>
        </div>
      </div>
    </header>
  );
};
