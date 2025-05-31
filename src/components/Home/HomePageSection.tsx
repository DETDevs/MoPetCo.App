import { TranslatableText } from "../common/TranslatableText";
import { useVideos } from "../../hooks/useVideos"; // ✅ Nuevo hook
import { Link } from "react-router-dom";

export const HomePageSection = () => {
  const { data: videos, isLoading } = useVideos(); // ✅ React Query

  const videoToShow = videos?.filter((item) => item.tipo === "Home");

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden ">
      {!isLoading && videos?.some((item) => item.tipo === "Home L") && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {videoToShow?.map((item) => (
            <source key={item.idVideo} src={item.urlVideo} type="video/webm" />
          ))}
          Tu navegador no soporta el video.
        </video>
      )}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Contenido centrado */}
      <div className="flex flex-col items-center z-20 text-center max-w-md mx-auto px-4">
        <h1 className="text-3xl w-[85%] md:text-[2.5rem] lg:text-[3rem] font-extrabold text-white leading-8 md:leading-none">
          <TranslatableText text="Only the best for your Furry Friend" />
        </h1>

        <p className="text-base font-bold md:text-lg lg:text-xl text-pink-400 my-4">
          Servicing Miami-Dade, Broward, And Palm Beach, FL
        </p>

        <Link
          to="/booking"
          className="bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600 lg:text-lg"
        >
          <TranslatableText text="Book an appointment" />
        </Link>
      </div>
    </div>
  );
};
