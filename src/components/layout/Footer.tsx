import { useEffect, useState } from "react";
import { PawPrint } from "../../types/paw";
import { TranslatableText } from "../common/TranslatableText";

const Footer = () => {
  const [paws, setPaws] = useState<PawPrint[]>([]);

  useEffect(() => {
    const generatedPaws: PawPrint[] = [];
    const pawCount = 12;

    for (let i = 0; i < pawCount; i++) {
      const top = `${Math.random() * 85}%`; // Limitado al 85% de altura
      const left = `${Math.random() * 100}%`;
      generatedPaws.push({ id: i, top, left });
    }

    setPaws(generatedPaws);
  }, []);

  const pawPositions: PawPrint[] = [
    { id: 1, top: "90%", left: "55%", screen: "desktop" },
    { id: 2, top: "40%", left: "95%", screen: "desktop" },
    { id: 3, top: "52%", left: "0%", screen: "desktop" },
    { id: 4, top: "100%", left: "60%", screen: "desktop" },
    { id: 5, top: "10%", left: "50%", screen: "desktop" },
    { id: 6, top: "60%", left: "92%", screen: "desktop" },
    { id: 7, top: "30%", left: "2%", screen: "mobile" },
    { id: 8, top: "30%", left: "10%", screen: "mobile" },
    { id: 9, top: "70%", left: "95%", screen: "mobile" },
    { id: 10, top: "70%", left: "5%", screen: "mobile" },
    { id: 11, top: "70%", left: "86%", screen: "mobile" },
    { id: 12, top: "0%", left: "92%", screen: "mobile" },
    { id: 13, top: "0%", left: "80%", screen: "mobile" },
    { id: 14, top: "20%", left: "95%", screen: "mobile" },
  ];
  return (
    <footer className="bg-white relative overflow-hidden border-t border-gray-200">
      <div className="absolute top-0 left-0 right-0 bottom-[100px] pointer-events-none z-0">
        {pawPositions.map((paw) => (
          <img
            key={paw.id}
            src="/assets/pawprint.png"
            alt="Pawprint"
            className={`absolute w-5 h-5 opacity-20 transition-all duration-500 
        pointer-events-none 
        ${paw.screen === "mobile" ? "block md:hidden" : "hidden md:block"}`}
            style={{ top: paw.top, left: paw.left }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center md:text-left">
        <div
          className="space-y-4 text-sm text-gray-700 
             flex flex-col items-center text-center
             md:items-start md:text-left"
        >
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <img src="/assets/dog.png" alt="Dog Icon" className="h-6 w-6" />
            <h3 className="font-bold text-lg text-pink-500">
              <TranslatableText text="Get In Touch" />
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-pink-500">
                Broward, Palm Beach FL
              </p>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <span>📱</span>
                <a
                  href="tel:+19542719939"
                  className="hover:underline font-bold"
                >
                  Call/Text: (954) 271-9939
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-pink-500">Miami FL</p>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <span>📱</span>
                <a
                  href="tel:+13059025008"
                  className="hover:underline font-bold"
                >
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
          <p className="text-sm font-semibold">
            <TranslatableText text="Monday to Saturday: 9:00 AM – 5:30 PM" />
          </p>
          <p className="text-sm font-semibold">
            <TranslatableText text="Sunday: Closed" />
          </p>
          <div className="space-y-1 mt-6 md:mt-2">
            <div className="flex items-start space-x-2 justify-center md:justify-start ">
              <span>✉️</span>
              <a href="mailto:info@mopetco.com" className="hover:underline font-bold">
                info@mopetco.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <img
              src="/assets/sitting.png"
              alt="Redes Icon"
              className="h-6 w-6"
            />
            <h3 className="font-bold text-lg text-pink-500">
              <TranslatableText text="Social Media" />
            </h3>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
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
            <a
              target="_blank"
              href="https://www.tiktok.com/@mopetco?_t=ZT-8vNDv7QIkxu&_r=1"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <i className="fas fa-building text-pink-500"></i>
            <h3 className="font-bold text-lg text-pink-500">
              <TranslatableText text="Company" />
            </h3>
          </div>
          <p className="text-base text-center md:text-left">
            Firebird Transport LLC
          </p>
          <p className="text-[10px] text-center md:text-left text-gray-600">
            2500 SW 22nd Ter, Unit 721
            <br />
            Fort Lauderdale, FL 33312
          </p>
        </div>
      </div>

      <div className="bg-black text-white text-center py-2 text-sm">
        © {new Date().getFullYear()} DEVTitans.{" "}
        <TranslatableText text="All rights reserved." />
      </div>
    </footer>
  );
};

export default Footer