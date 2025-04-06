import React, { useEffect, useState } from "react";
import { Review } from "../../types/review";
import { ReviewSlider } from "./ReviewSlider";
import { TranslatableText } from "../common/TranslatableText";
import { fetchReviews } from "../../Service/reviewService";

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      const data = await fetchReviews();
      setReviews(data);
    };

    loadReviews();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {reviews === null ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/assets/runningdog.gif" 
            alt="Cargando..."
            className="w-24 h-24 object-contain"
          />
          <p className="text-gray-500 text-lg font-medium">
            <TranslatableText text="Fetching paw-some reviews..." />
          </p>
        </div>
      ) : reviews.length === 0 ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/assets/saddoggi.gif"
            alt="Sin reseñas"
            className="w-20 h-20 object-contain"
          />
          <p className="text-gray-500 text-lg font-medium">
            <TranslatableText text="No furry feedback yet!" />
          </p>
        </div>
      ) : (
        <ReviewSlider reviews={reviews} />
      )}
    </div>
  );
};

export default ReviewList;
