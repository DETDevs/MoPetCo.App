import React, { useEffect, useState, useRef, forwardRef } from "react";
import { obtenerVideosTypes } from "../../Service/videoService";
import { VideoType } from "../../types/VideoType";

interface VideoGallerySliderProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export const VideoGallerySlider = forwardRef<HTMLVideoElement, VideoGallerySliderProps>(
  ({ isMuted, onToggleMute }, ref) => {
    const [galleryVideos, setGalleryVideos] = useState<VideoType[]>([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const internalVideoRef = useRef<HTMLVideoElement>(null);
    const videoRef = (ref as React.RefObject<HTMLVideoElement>) || internalVideoRef;

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
        (prevIndex) => (prevIndex - 1 + galleryVideos.length) % galleryVideos.length
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

        {/* Botón anterior */}
        {galleryVideos.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="last"
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-3 hover:bg-black/70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Botón siguiente */}
        {galleryVideos.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="next"
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-3 hover:bg-black/70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
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
                title="scroll"
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentVideoIndex === index ? "bg-pink-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
