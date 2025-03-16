import { useEffect, useState } from "react";
import { PawPrint } from "../types/paw";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [paws, setPaws] = useState<PawPrint[]>([]);

  useEffect(() => {
    const generatedPaws: PawPrint[] = [];
    const pawCount = 4; // Número de huellitas

    for (let i = 0; i < pawCount; i++) {
      const top = `${Math.random() * 50}px`; // Distancia desde arriba
      const left = `${Math.random() * 90}%`; // Porcentaje desde la izquierda
      generatedPaws.push({ id: i, top, left });
    }

    setPaws(generatedPaws);
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
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
            className="w-6 h-6 absolute opacity-60"
            style={{ top: paw.top, left: paw.left }}
          />
        ))}


        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center z-10">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Gallery
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Release Form
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            FAQs
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
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

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Gallery
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Release Form
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            FAQs
          </a>
        </div>
      )}
    </header>
  );
};
