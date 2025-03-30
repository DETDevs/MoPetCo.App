export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/19542430222?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet.%20Could%20you%20help%20me%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[6%] right-1 md:right-4 bg-green-500 hover:bg-green-600 text-white py-1 px-2 md:p-3 rounded-full shadow-lg z-30 animate-bounce"
      title="Chat with us on WhatsApp!"
    >
      <i className="fab fa-whatsapp text-2xl md:text-4xl"></i>
    </a>
  );
};
