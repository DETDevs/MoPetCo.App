import { useEffect, useState } from "react";
import { GalleryImage } from "../../types/galleryImage";
import { obtenerImagenesGaleria } from "../../Service/galleryService";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";

export const GallerySection = () => {
  const [imagenes, setImagenes] = useState<GalleryImage[]>([]);
  const [currentSet, setCurrentSet] = useState<GalleryImage[]>([]);
  const [fade, setFade] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 10000 });

    const fetchImages = async () => {
      const data = await obtenerImagenesGaleria();
      setImagenes(data.slice(0, 20)); // Solo 20 imágenes
      setCurrentSet(data.slice(0, 10));
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        const nextIndex = (startIndex + 10) % 20;
        setCurrentSet(imagenes.slice(nextIndex, nextIndex + 10));
        setStartIndex(nextIndex);
        setFade(false);
      }, 2000);
    }, 20000);

    return () => clearInterval(interval);
  }, [imagenes, startIndex]);

  return (
    <div
      className="w-full py-10 flex flex-col items-center justify-center bg-white"
      data-aos="fade-up"
    >
      <div className="md:w-[85%]">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          <SectionTitle>Gallery</SectionTitle>
        </h1>

        <h2 className="text-xl font-bold text-center mb-6">
          <TranslatableText text="Looking & Smelling Great!" />
        </h2>

        <div
          className={`transition-opacity w-full duration-500 flex justify-center items-center ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full grid-auto-rows-[200px] md:auto-rows-[200px] md:w-full px-4 md:px-0"
          >
            {currentSet.map((img, index) => (
              <img
                key={img.idImagen}
                src={img.urlImagen}
                alt={img.descripcion}
                className={`object-cover w-full h-full rounded-lg transition-transform duration-300 ${
                  index === 0 || index === 7
                    ? "col-span-2 row-span-2 hover:scale-95"
                    : "hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <a
        href="/gallery"
        className="mt-6 inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
      >
        <TranslatableText text="Browse more furry friends!" />
      </a>
    </div>
  );
};
