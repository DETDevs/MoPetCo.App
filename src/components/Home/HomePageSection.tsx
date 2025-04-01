import { useState } from "react";
import { BookingModal } from "../common/BookingModal";
import { TranslatableText } from "../common/TranslatableText";

export const HomePageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/home.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Overlay para contraste si lo necesitás */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Contenido sobre el video */}
      <div className="text-center space-y-3 max-w-md mx-auto z-10 px-4">
        <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-extrabold text-white leading-8 md:leading-none">
          <TranslatableText text="Only the best" />{" "}
          <br className="block md:hidden" /> <TranslatableText text="for you" />{" "}
          <span className="text-white">
            <TranslatableText text="furry friend" />
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white">
          Servicing Miami Dade & Broward, FL
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600 lg:text-lg"
        >
          Book an appointment
        </button>
      </div>

      {/* Modal de agendar cita */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
