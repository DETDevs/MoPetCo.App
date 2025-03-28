import React from "react";
import { useNavigate } from "react-router-dom";

interface NotFoundMessageProps {
  imageUrl?: string;
  title?: string;
  message?: string;
  buttonText?: string;
  redirectPath?: string;
}

export const NotFoundMessage: React.FC<NotFoundMessageProps> = ({
  imageUrl = "/assets/sad-dog.gif",
  title = "Oops! Not Found 🐾",
  message = "We couldn't find what you’re looking for. Maybe it’s out for a walk!",
  buttonText = "Go back",
  redirectPath = "/",
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <img
        src={imageUrl}
        alt="Not Found"
        className="w-48 h-48 mb-6 object-contain"
      />
      <h2 className="text-2xl font-bold text-pink-500 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 max-w-md">{message}</p>
      <button
        onClick={() => navigate(redirectPath)}
        className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
      >
        {buttonText}
      </button>
    </div>
  );
};
