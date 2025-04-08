import { GalleryHeroSectionProps } from "../../types/GalleryHeroSectionProps";
import { TranslatableText } from "../common/TranslatableText";
import { VideoGallerySlider } from "./VideoGallerySlider";

export const GalleryHeroSection = ({
  title,
  subtitle,
}: GalleryHeroSectionProps) => {
  return (
    <div className="w-full flex items-center justify-center px-4 py-10 md:h-[95vh] md:mt-[4.2rem]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 relative">
        <div className="relative w-full md:w-1/2">
          <VideoGallerySlider />
          <div className="absolute inset-0 bg-black/50 md:hidden z-1 rounded-lg" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:hidden z-2">
            <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
            <TranslatableText text={title}/>
            </h1>
            <p className="text-lg mt-2 opacity-90 drop-shadow-md"><TranslatableText text={subtitle}/></p>
          </div>
        </div>

        <div className="hidden md:flex flex-col w-full md:w-1/2 items-start justify-center space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text py-2">
            <TranslatableText text={title}/>
            </h1>
            <div className="w-16 h-1 bg-pink-400 mt-2 mb-4 rounded animate-pulse" />
            <p className="text-base text-gray-700 leading-relaxed font-medium">
            <TranslatableText text={subtitle}/>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-pink-500 flex items-center gap-2">
              <i className="fas fa-star text-yellow-400" />{" "}
              <TranslatableText text="Featured" />
            </h3>
            <p className="text-gray-700 my-2">
              <TranslatableText text="Discover the fluffiest makeovers and heartwarming moments from our mobile pet spa!" />
            </p>
            <a href="#gallery" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 text-sm ">
              <TranslatableText text="Explore Now" />
            </a>
          </div>

          <p className="text-sm text-gray-500 italic animate-pulse">
            "<TranslatableText text="Because every pet deserves to shine" /> ✨"
          </p>
        </div>
      </div>
    </div>
  );
};
