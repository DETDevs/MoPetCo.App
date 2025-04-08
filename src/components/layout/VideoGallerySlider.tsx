import React, { useEffect, useState, useRef, forwardRef } from "react";
import { obtenerVideosTypes } from "../../Service/videoService";
import { VideoType } from "../../types/VideoType";

export const VideoGallerySlider = forwardRef<HTMLVideoElement>((props, ref) => {
  const [galleryVideos, setGalleryVideos] = useState<VideoType[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const internalVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef =
    (ref as React.RefObject<HTMLVideoElement>) || internalVideoRef;

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await obtenerVideosTypes();
      const gallery = videos.filter((video) => video.tipo === "Gallery");
      setGalleryVideos(gallery);
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Solo impones el valor de isMuted al video
      videoRef.current.muted = isMuted;
    }
  }, [currentVideoIndex, isMuted]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % galleryVideos.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % galleryVideos.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryVideos.length) % galleryVideos.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.touches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (distance > 50) {
      handleNext();
      touchStartX.current = null;
    } else if (distance < -50) {
      handlePrev();
      touchStartX.current = null;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  if (galleryVideos.length === 0) return null;

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="relative w-full rounded-xl overflow-hidden"
    >
      {/* Video */}
      <video
        ref={videoRef}
        key={galleryVideos[currentVideoIndex].idVideo}
        src={galleryVideos[currentVideoIndex].urlVideo}
        autoPlay
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover rounded-xl max-h-[100vh] lg:max-h-[95vh]"
        onEnded={handleVideoEnd}
      />

      {/* Botón de control de audio */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 z-10 bg-white text-black rounded-full p-2 shadow-md hover:bg-pink-500 hover:text-white transition"
      >
        <i className="fas fa-volume-up"></i>
      </button>

      {/* Botón anterior */}
      {galleryVideos.length > 1 && (
        <button
          onClick={handlePrev}
          className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-3 hover:bg-black/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Botón siguiente */}
      {galleryVideos.length > 1 && (
        <button
          onClick={handleNext}
          className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-3 hover:bg-black/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Puntos indicadores */}
      {galleryVideos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {galleryVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentVideoIndex === index ? "bg-pink-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
});
