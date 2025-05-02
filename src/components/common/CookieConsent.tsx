import { useState, useEffect } from "react";
import { TranslatableText } from "./TranslatableText";

const loadRecaptcha = () => {
  if (document.getElementById("recaptcha-script")) return;
  const s = document.createElement("script");
  s.src = "https://www.google.com/recaptcha/api.js?render=explicit";
  s.async = true;
  s.defer = true;
  s.id = "recaptcha-script";
  document.body.appendChild(s);
};

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Sólo mostramos el banner si no hay consentimiento
    if (!localStorage.getItem("cookie_consent")) setShow(true);
    else loadRecaptcha(); // El usuario ya aceptó antes → cargamos reCAPTCHA
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    loadRecaptcha();      // ahora sí insertamos el script
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4 w-[90%] md:w-auto text-sm z-50">
      <span className="text-center md:text-left">
        <TranslatableText text="Usamos cookies de terceros (p. ej. reCAPTCHA) para mejorar la seguridad. ¿Las aceptas?" />
      </span>

      <button
        onClick={acceptCookies}
        className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition"
      >
        <TranslatableText text="Aceptar" />
      </button>
    </div>
  );
};
