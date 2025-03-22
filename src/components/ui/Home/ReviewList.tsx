import React, { useEffect, useState } from "react";
import { Review } from "../../../types/review";
import { ReviewCard } from "./ReviewCard";

export const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const apiKey = "AIzaSyAJXZku0tVKG2ifB85-qxJaoqQP-KA8j7g"; // 🔁 Tu API KEY
  const placeId = "ChIJ4xNFOrG32YgROYhpWhMUv9E";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `/mapsapi/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
        );

        const data = await res.json();
        setReviews(data.result.reviews || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Reseñas de MoPetCo
      </h2>
      {reviews.map((review, idx) => (
        <ReviewCard key={idx} review={review} />
      ))}

      <div className="text-center mt-4">
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJ4xNFOrG32YgROYhpWhMUv9E"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ver todas las reseñas en Google
        </a>
      </div>
    </div>
  );
};
