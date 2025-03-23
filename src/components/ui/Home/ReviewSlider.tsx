import React, { useState, useEffect } from "react";
import { Review } from "../../../types/review";

interface ReviewSliderProps {
  reviews: Review[];
}

export const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);

  useEffect(() => {
    const updateReviewsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setReviewsPerPage(1);
      } else if (width < 1024) {
        setReviewsPerPage(2);
      } else {
        setReviewsPerPage(3);
      }
    };

    updateReviewsPerPage();
    window.addEventListener("resize", updateReviewsPerPage);
    return () => window.removeEventListener("resize", updateReviewsPerPage);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const result: Review[] = [];
    for (let i = 0; i < reviewsPerPage; i++) {
      result.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return result;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="relative px-4 sm:px-10">
      {/* Title and description */}
      <div className="text-center my-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Discover why pet lovers trust MoPetCo for their furry friends'
          grooming needs 🐶🐱
        </p>
      </div>

      {/* Left arrow */}
      <button
        className="absolute top-56 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition
             left-0 sm:left-6 md:left-1/1 lg:left-4 xl:left-[4%] 2xl:left-[10%]"
        onClick={handlePrev}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Review cards container */}
      <div className="flex justify-center gap-4">
        {visibleReviews.map((review, i) => (
          <div
            key={review.author_name + i}
            className={`bg-white rounded-xl p-6 shadow-md transition-transform duration-300 ${
              i === Math.floor(reviewsPerPage / 2)
                ? "scale-105 shadow-lg"
                : "scale-100"
            } w-full max-w-sm`}
          >
            <div className="flex items-center mb-2 gap-2">
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{review.author_name}</p>
                <p className="text-sm text-gray-500">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
            <div className="text-yellow-400 mb-2">
              {[...Array(5)].map((_, idx) => (
                <i key={idx} className="fas fa-star"></i>
              ))}
            </div>
            <p className="text-gray-700 text-sm line-clamp-5">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        className="absolute top-56 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition
             right-0 sm:right-4 md:right-1/1 lg:right-4 xl:right-[4%] 2xl:right-[10%]"
        onClick={handleNext}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Google Reviews button */}
      <div className="text-center my-6">
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJ4xNFOrG32YgROYhpWhMUv9E"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl font-medium text-sm"
        >
          <i className="fab fa-google mr-2 text-base"></i>
          See all reviews on Google
        </a>
      </div>
    </div>
  );
};
