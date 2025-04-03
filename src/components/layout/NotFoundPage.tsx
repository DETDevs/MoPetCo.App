import { Link } from "react-router-dom";
import { TranslatableText } from "../common/TranslatableText";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-white">
      <img
        src="/assets/404.gif"
        alt="Not Found Dog"
        className="w-48 h-48 mb-6"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-2">
        <TranslatableText text="Oops! Page not found" />{" "}
        <span className="ml-2">🐾</span>
      </h1>
      <p className="text-gray-700 mb-6 max-w-md">
        <TranslatableText
          text="We couldn't find the page you're looking for. It might have been moved,
        deleted, or maybe it's just out for a walk!"
        />
      </p>
      <Link
        to="/"
        className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors"
      >
        <TranslatableText text="Go back to Home" />
      </Link>
    </div>
  );
};

export default NotFoundPage;