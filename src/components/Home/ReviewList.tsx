import React, { useEffect, useState } from "react";
import { Review } from "../../types/review";
import { ReviewSlider } from "./ReviewSlider";
import { TranslatableText } from "../common/TranslatableText";
import { fetchReviews } from "../../Service/reviewService";

export const ReviewList: React.FC = () => {
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
            src="/assets/runningdog.gif" // Podés usar una imagen animada o estática tipo /assets/puppy.png
            alt="Cargando..."
            className="w-24 h-24 object-contain"
          />
          <p className="text-gray-500 text-lg font-medium">
            <TranslatableText text="Fetching paw-some reviews..."/>
          </p>
        </div>
      ) : reviews.length === 0 ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/assets/saddoggi.gif" // Otra imagen simpática, puede ser un perrito triste o dormido
            alt="Sin reseñas"
            className="w-20 h-20 object-contain"
          />
          <p className="text-gray-500 text-lg font-medium">
            <TranslatableText text="No furry feedback yet!"/>
          </p>
        </div>
      ) : (
        <ReviewSlider reviews={reviews} />
      )}
    </div>
  );
};
