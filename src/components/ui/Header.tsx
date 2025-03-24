import { useEffect, useState } from "react";
import { PawPrint } from "../../types/paw";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paws, setPaws] = useState<PawPrint[]>([]);

  useEffect(() => {
    const generatedPaws: PawPrint[] = [];
    const pawCount = 4;

    for (let i = 0; i < pawCount; i++) {
      const top = `${Math.random() * 50}px`;
      const left = `${Math.random() * 90}%`;
      generatedPaws.push({ id: i, top, left });
    }

    setPaws(generatedPaws);
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div>
          <img
            src="/assets/cropped-M-Logo.png"
            alt="MoPetCo Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Huellitas aleatorias */}
        {paws.map((paw) => (
          <img
            key={paw.id}
            src="/assets/pawprint.png"
            alt="Paw Print"
            className="w-6 h-6 absolute opacity-60 transition-opacity duration-700 ease-in"
            style={{ top: paw.top, left: paw.left }}
          />
        ))}

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center z-10">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </a>
          <a
            href="/service"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Services
          </a>
          <a
            href="/gallery"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
          <a
            href="/release-form"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Release Form
          </a>
          <a
            href="/faqs"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            FAQs
          </a>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Nav Dropdown - Animado desde arriba */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-auto bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-6 space-y-4 mt-12 flex flex-col items-center">
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
            About Us
          </a>
          <a
            href="/service"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            Services
          </a>
          <a
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            Gallery
          </a>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            Contact
          </a>
          <a
            href="/release-form"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            Release Form
          </a>
          <a
            href="/faqs"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg"
          >
            FAQs
          </a>
        </div>
      </div>
    </header>
  );
};
