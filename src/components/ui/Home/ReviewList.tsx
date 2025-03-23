import React, { useEffect, useState } from "react";
import { Review } from "../../../types/review";
import { ReviewSlider } from "./ReviewSlider";

export const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/googlemaps/reviews?placeId=ChIJ4xNFOrG32YgROYhpWhMUv9E")


        const data = await res.json();
        if (data?.result?.reviews && Array.isArray(data.result.reviews)) {
          setReviews(data.result.reviews);
        } else {
          console.error("Formato de respuesta inesperado:", data);
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]); // Evita loop infinito
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {reviews === null ? (
        <p className="text-center text-gray-500">Cargando reseñas...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-500">No hay reseñas disponibles.</p>
      ) : (
        <ReviewSlider reviews={reviews} />
      )}
    </div>
  );
};
