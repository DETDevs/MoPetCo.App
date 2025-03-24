import { useEffect, useState } from "react";
import { PawPrint } from "../../types/paw";

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
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <img src="/assets/dog.png" alt="Dog Icon" className="h-6 w-6" />
            <h3 className="font-bold text-lg">Get In Touch</h3>
          </div>
          <p className="text-sm">📞 Call: +1 (954) 243-0222 </p>
          <p className="text-sm">✉️ Email: info@mopetco.com </p>
          <p className="text-sm">
            🏠 Address: 2500 SW 22nd Ter,
            <br />
            Fort Lauderdale, FL 33312.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <img
              src="/assets/animals.png"
              alt="Office Icon"
              className="h-6 w-6"
            />
            <h3 className="font-bold text-lg">Office Hours:</h3>
          </div>
          <p className="text-sm">Monday to Saturday: 9:00 AM – 5:30 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>

        <div>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <img
              src="/assets/sitting.png"
              alt="Redes Icon"
              className="h-6 w-6"
            />
            <h3 className="font-bold text-lg">Social Media</h3>
          </div>
          <div className="flex justify-center space-x-4 text-xl">
            <a
              target="_blank"
              href="https://www.facebook.com/share/169UsqCkHT/?mibextid=wwXIfr"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mopetco/profilecard/?igsh=djN4ZzRleGluOHA2"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-2 text-sm">
        © {new Date().getFullYear()} DEVTitans. All rights reserved.
      </div>
    </footer>
  );
};
