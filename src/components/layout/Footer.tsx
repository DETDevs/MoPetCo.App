import { useEffect, useState } from "react";
import { PawPrint } from "../../types/paw";
import { TranslatableText } from "../common/TranslatableText";

export const Footer = () => {
  const [paws, setPaws] = useState<PawPrint[]>([]);

  useEffect(() => {
    const generatedPaws: PawPrint[] = [];
    const pawCount = 10;

    for (let i = 0; i < pawCount; i++) {
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      generatedPaws.push({ id: i, top, left });
    }

    setPaws(generatedPaws);
  }, []);

  return (
    <footer className="bg-white relative overflow-hidden border-t border-gray-200">
      {paws.map((paw) => (
        <img
          key={paw.id}
          src="/assets/pawprint.png"
          alt="Pawprint"
          className="absolute w-5 h-5 opacity-50"
          style={{ top: paw.top, left: paw.left }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center md:text-left">
        <div className="space-y-4 text-sm text-gray-700">
          {/* Título */}
          <div className="flex items-center space-x-2">
            <img src="/assets/dog.png" alt="Dog Icon" className="h-6 w-6" />
            <h3 className="font-bold text-lg text-pink-500">
              <TranslatableText text="Get In Touch" />
            </h3>
          </div>

          {/* Email y Dirección */}
          <div className="space-y-1">
            <div className="flex items-start space-x-2">
              <span>✉️</span>
              <a href="mailto:info@mopetco.com" className="hover:underline">
                info@mopetco.com
              </a>
            </div>

            <div className="flex items-start space-x-2">
              <span>🏠</span>
              <a
                href="https://www.google.com/maps/place/2500+SW+22nd+Ter,+Fort+Lauderdale,+FL+33312"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <TranslatableText text="2500 SW 22nd Ter, Fort Lauderdale, FL 33312" />
              </a>
            </div>
          </div>

          {/* Zona de Teléfonos en dos columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Broward Column */}
            <div>
              <p className="font-semibold text-pink-500">
                Broward, Palm Beach FL
              </p>
              <div className="flex items-start space-x-2">
                <span>📱</span>
                <a href="tel:+19542719939" className="hover:underline">
                  Call/Text: (954) 271-9939
                </a>
              </div>
            </div>

            {/* Miami Column */}
            <div>
              <p className="font-semibold text-pink-500">Miami FL</p>
              <div className="flex items-start space-x-2">
                <span>📱</span>
                <a href="tel:+13059025008" className="hover:underline">
                  Call/Text: (305) 902-5008
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <img
              src="/assets/animals.png"
              alt="Office Icon"
              className="h-6 w-6"
            />
            <h3 className="font-bold text-lg text-pink-500">
              <TranslatableText text="Office Hours:" />
            </h3>
          </div>
          <p className="text-sm">
            <TranslatableText text="Monday to Saturday: 9:00 AM – 5:30 PM" />
          </p>
          <p className="text-sm">
            <TranslatableText text="Sunday: Closed" />
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <img
              src="/assets/sitting.png"
              alt="Redes Icon"
              className="h-6 w-6"
            />
            <h3 className="font-bold text-lg text-pink-500">
              <TranslatableText text="Social Media" />
            </h3>
          </div>
          <div className="flex justify-center space-x-4 text-xl">
            <a
              target="_blank"
              href="https://www.facebook.com/share/169UsqCkHT/?mibextid=wwXIfr"
            >
              <i className="text-2xl fab fa-facebook text-blue-600"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mopetco/profilecard/?igsh=djN4ZzRleGluOHA2"
            >
              <i className="text-2xl fab fa-instagram text-pink-600"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-2 text-sm">
        © {new Date().getFullYear()} DEVTitans.{" "}
        <TranslatableText text="All rights reserved." />
      </div>
    </footer>
  );
};
