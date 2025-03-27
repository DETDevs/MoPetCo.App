import { useEffect, useState } from "react";
import { GalleryImage } from "../../../types/gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { TranslatableText } from "../TranslatableText";

const firstSet: GalleryImage[] = [
  { src: "/assets/dog2.jpg", alt: "Dog 1" },
  { src: "/assets/dog1.JPG", alt: "Dog 2" },
  { src: "/assets/dog3.jpg", alt: "Dog 3" },
  { src: "/assets/dog1.JPG", alt: "Dog 4" },
  { src: "/assets/dog2.jpg", alt: "Dog 5" },
  { src: "/assets/dog3.jpg", alt: "Dog 6" },
  { src: "/assets/dog1.JPG", alt: "Dog 7" },
  { src: "/assets/dog2.jpg", alt: "Dog 8" },
  { src: "/assets/dog3.jpg", alt: "Dog 9" },
  { src: "/assets/dog1.JPG", alt: "Dog 10" },
];

const secondSet: GalleryImage[] = [
  { src: "/assets/dog3.jpg", alt: "Dog 11" },
  { src: "/assets/dog2.jpg", alt: "Dog 12" },
  { src: "/assets/dog1.JPG", alt: "Dog 13" },
  { src: "/assets/dog3.jpg", alt: "Dog 14" },
  { src: "/assets/dog2.jpg", alt: "Dog 15" },
  { src: "/assets/dog1.JPG", alt: "Dog 16" },
  { src: "/assets/dog2.jpg", alt: "Dog 17" },
  { src: "/assets/dog3.jpg", alt: "Dog 18" },
  { src: "/assets/dog1.JPG", alt: "Dog 19" },
  { src: "/assets/dog2.jpg", alt: "Dog 20" },
];

export const GallerySection = () => {
  const [currentSet, setCurrentSet] = useState<GalleryImage[]>(firstSet);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animación al hacer scroll

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSet((prev) => (prev === firstSet ? secondSet : firstSet));
        setFade(false); // fade-in
      }, 500); // duración del fade-out
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full py-10 flex flex-col items-center bg-white"
      data-aos="fade-up"
    >
      <h2 className="text-xl font-bold text-center mb-6">
        <TranslatableText text="Looking & Smelling Great!"/>
      </h2>

      {/* Contenedor con animación fade */}
      <div
        className={`transition-opacity w-full  duration-500 flex justify-center items-center ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full grid-auto-rows-[200px] md:auto-rows-[200px] md:w-full px-4 md:px-0 jus"
        >
          {/* Imagen grande */}
          <img
            src={currentSet[0].src}
            alt={currentSet[0].alt}
            className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-95"
          />
          {/* Cuatro pequeñas */}
          <img
            src={currentSet[1].src}
            alt={currentSet[1].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={currentSet[2].src}
            alt={currentSet[2].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={currentSet[3].src}
            alt={currentSet[3].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={currentSet[4].src}
            alt={currentSet[4].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          {/* Cuatro pequeñas */}
          <img
            src={currentSet[5].src}
            alt={currentSet[5].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={currentSet[6].src}
            alt={currentSet[6].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={currentSet[7].src}
            alt={currentSet[7].alt}
            className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-95"
          />
          <img
            src={currentSet[8].src}
            alt={currentSet[8].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          {/* Imagen grande */}
          <img
            src={currentSet[9].src}
            alt={currentSet[9].alt}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <a
        href="/gallery"
        className="mt-6 inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
      >
        <TranslatableText text="Browse more furry friends!"/>
      </a>
    </div>
  );
};
