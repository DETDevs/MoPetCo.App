import { useEffect, useState } from "react";
import { obtenerImagenesGaleria } from "../Service/galleryService";
import { GalleryImage } from "../types/galleryImage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../components/layout/Header";
import { Loading } from "../components/layout/Loading";
import { GalleryHeroSection } from "../components/layout/GalleryHeroSection";
import { TranslatableText } from "../components/common/TranslatableText";

const GalleryPage = () => {
  const [imagenes, setImagenes] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(7);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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

  const handleImageClick = (img: GalleryImage) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) return <Loading />;

  return (
    <>

      <GalleryHeroSection
        title="Grooming Gallery"
        subtitle="Experience the magic of our mobile pet spa"
        videoSrc="/assets/herogallery.mp4"
      />

      <div className="max-w-7xl mx-auto mt-20 px-4 py-12" id="gallery">
        <h2
          className="text-xl sm:text-2xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          <TranslatableText text="Looking & Smelling Great!" />
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
                className={`w-full h-full object-cover transition-transform duration-300 cursor-pointer ${
                  index % 6 === 0 || index % 6 === 5
                    ? "hover:scale-95"
                    : "hover:scale-105"
                }`}
                onClick={() => handleImageClick(img)}
              />
            </div>
          ))}
        </div>

        {visibleCount < imagenes.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              aria-label="back"
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
            >
              <TranslatableText text="Browse more furry friends!" />
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed  inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          />
          <div className="relative bg-white rounded shadow-lg p-4 max-w-3xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
              aria-label="close"
              onClick={handleCloseModal}
            >
              X
            </button>
            <img
              src={selectedImage.urlImagen}
              alt={selectedImage.descripcion}
              className="w-full max-h-[75vh] object-cover rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
