import React, { useEffect, useState } from "react";
import { Review } from "../../../types/review";
import { ReviewSlider } from "./ReviewSlider";
import { TranslatableText } from "../TranslatableText";

export const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          "/api/googlemaps/reviews?placeId=ChIJ4xNFOrG32YgROYhpWhMUv9E"
        );

        const data = await res.json();
        if (data?.result?.reviews && Array.isArray(data.result.reviews)) {
          setReviews(data.result.reviews);
        } else {
          console.error("Formato de respuesta inesperado:", data);
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      }
    };

    fetchReviews();
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
