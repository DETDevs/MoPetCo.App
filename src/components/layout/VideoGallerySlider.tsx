import { useEffect, useState, useRef } from "react";
import { obtenerVideosTypes } from "../../Service/videoService";
import { VideoType } from "../../types/VideoType";

export const VideoGallerySlider = () => {
  const [galleryVideos, setGalleryVideos] = useState<VideoType[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await obtenerVideosTypes();
      const gallery = videos.filter((video) => video.tipo === "Gallery");
      setGalleryVideos(gallery);
    };

    fetchVideos();
  }, []);

  // Cambiar al siguiente video cuando termina el actual
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % galleryVideos.length);
  };

  // Navegación manual con dots
  const handleDotClick = (index: number) => {
    setCurrentVideoIndex(index);
  };

  // Swipe touch para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.touches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (distance > 50) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % galleryVideos.length);
      touchStartX.current = null;
    } else if (distance < -50) {
      setCurrentVideoIndex((prevIndex) =>
        (prevIndex - 1 + galleryVideos.length) % galleryVideos.length
      );
      touchStartX.current = null;
    }
  };

  if (galleryVideos.length === 0) return null;

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="relative w-full rounded-xl overflow-hidden"
    >
      <video
        ref={videoRef}
        key={galleryVideos[currentVideoIndex].idVideo}
        src={galleryVideos[currentVideoIndex].urlVideo}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover rounded-xl max-h-[100vh] lg:max-h-[95vh]"
        onEnded={handleVideoEnd}
      />

      {/* Dots de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {galleryVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentVideoIndex === index ? "bg-pink-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
