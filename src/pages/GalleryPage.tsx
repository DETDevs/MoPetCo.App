import { useEffect, useState } from "react";
import { obtenerImagenesGaleria } from "../Service/galleryService";
import { GalleryImage } from "../types/galleryImage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import { Loading } from "../components/ui/Loading";

export const GalleryPage = () => {
  const [imagenes, setImagenes] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(7);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchImagenes = async () => {
      const data = await obtenerImagenesGaleria();
      setImagenes(data);
      setTimeout(() => setLoading(false), 500);
    };

    fetchImagenes();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 7);
  };

  const visibleImages = imagenes.slice(0, visibleCount);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
        <h2
          className="text-xl sm:text-2xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          Looking & Smelling Great!
        </h2>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          data-aos="fade-up"
        >
          {visibleImages.map((img, index) => (
            <div
              key={img.idImagen}
              className={`overflow-hidden rounded-lg transition-transform duration-300 ${
                index % 6 === 0 || index % 6 === 5
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
            >
              <img
                src={img.urlImagen}
                alt={img.descripcion}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  index % 6 === 0 || index % 6 === 5
                    ? "hover:scale-95"
                    : "hover:scale-105"
                }`}
              />
            </div>
          ))}
        </div>

        {visibleCount < imagenes.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
            >
              Browse more furry friends!
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
