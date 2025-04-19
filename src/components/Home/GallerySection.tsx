import { useEffect, useState } from "react";
import { GalleryImage } from "../../types/galleryImage";
import { obtenerImagenesGaleria } from "../../Service/galleryService";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";
import { useInView } from "react-intersection-observer";

const GallerySection = () => {
  const [imagenes, setImagenes] = useState<GalleryImage[]>([]);
  const [currentSet, setCurrentSet] = useState<GalleryImage[]>([]);
  const [fade, setFade] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView || initialized) return;

    AOS.init({ duration: 500 });

    const fetchImages = async () => {
      try {
        const cached = localStorage.getItem("galleryImages");
        if (cached) {
          const data = JSON.parse(cached);
          if (Array.isArray(data) && data.length > 0) {
            setImagenes(data.slice(0, 20));
            setCurrentSet(data.slice(0, 10));
            setInitialized(true);
            return;
          }
        }

        const data = await obtenerImagenesGaleria();
        if (Array.isArray(data)) {
          localStorage.setItem("galleryImages", JSON.stringify(data));
          setImagenes(data.slice(0, 20));
          setCurrentSet(data.slice(0, 10));
        }
        setInitialized(true);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      }
    };

    fetchImages();
  }, [inView, initialized]);

  useEffect(() => {
    if (!initialized) return;

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        const nextIndex = (startIndex + 10) % 20;
        setCurrentSet(imagenes.slice(nextIndex, nextIndex + 10));
        setStartIndex(nextIndex);
        setFade(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [imagenes, startIndex, initialized]);

  return (
    <div
      ref={ref}
      className="w-full py-10 flex flex-col items-center justify-center bg-white"
      data-aos="fade-up"
    >
      {inView && initialized && (
        <>
          <div className="md:w-[85%] w-full">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
              <SectionTitle>
                <TranslatableText text="Gallery" />{" "}
              </SectionTitle>
            </h1>

            <h2 className="text-xl font-bold text-center mb-6">
              <TranslatableText text="Looking & Smelling Great!" />
            </h2>

            {/* Contenedor de galería */}
            <div
              className={`transition-opacity w-full duration-1000 ease-in-out flex justify-center items-center ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              style={{ minHeight: "600px" }} // Aumentamos un poco para mobile
            >
              <div
                data-aos="fade-up"
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full grid-auto-rows-[150px] md:grid-auto-rows-[200px] md:w-full px-4 md:px-0"
              >
                {currentSet.map((img, index) => {
                  const isLargeImage = index === 0 || index === 7;

                  return (
                    <div
                      key={img.idImagen}
                      className={`relative w-full h-full ${
                        isLargeImage ? "col-span-2 row-span-2" : ""
                      }`}
                      style={{
                        aspectRatio: isLargeImage ? "2 / 2" : "1 / 1",
                      }}
                    >
                      <img
                        src={img.urlImagen}
                        alt={img.descripcion}
                        loading="lazy"
                        className={`object-cover w-full h-full rounded-lg transition-transform duration-300 ${
                          isLargeImage ? "hover:scale-95" : "hover:scale-105"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <a
            href="/gallery"
            className="mt-6 inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
          >
            <TranslatableText text="Browse more furry friends!" />
          </a>
        </>
      )}
    </div>
  );
};

export default GallerySection;

