import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón si scrollY > 200
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[6%] left-4 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors z-50 animate-bounce"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
};
