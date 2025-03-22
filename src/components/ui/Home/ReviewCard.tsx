import React from 'react';
import { Review } from '../../../types/review';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          src={review.profile_photo_url}
          alt={review.author_name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <a
            href={review.author_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            {review.author_name}
          </a>
          <p className="text-sm text-gray-500">{review.relative_time_description}</p>
        </div>
      </div>

      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < review.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.685a1 1 0 00.95.69h3.875c.969 0 1.371 1.24.588 1.81l-3.135 2.28a1 1 0 00-.364 1.118l1.2 3.685c.3.921-.755 1.688-1.538 1.118l-3.135-2.28a1 1 0 00-1.175 0l-3.135 2.28c-.783.57-1.838-.197-1.538-1.118l1.2-3.685a1 1 0 00-.364-1.118L2.486 9.112c-.783-.57-.38-1.81.588-1.81h3.875a1 1 0 00.95-.69l1.2-3.685z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700">{review.text}</p>
    </div>
  );
};