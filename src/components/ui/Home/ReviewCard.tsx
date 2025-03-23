import React from "react";
import { Review } from "../../../types/review";

interface Props {
  review: Review;
}

export const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          src={review.profile_photo_url}
          alt={review.author_name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{review.author_name}</p>
          <p className="text-sm text-gray-500">{review.relative_time_description}</p>
        </div>
      </div>
      <p className="text-yellow-500 mb-2">⭐ {review.rating}</p>
      <p>{review.text}</p>
    </div>
  );
};
