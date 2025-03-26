import { useLanguage } from "../../contexts/LanguageContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      switchTo: "Change to Spanish",
      title: "Change Language",
      text: "Do you want to switch to Spanish?",
      confirm: "Yes, switch",
      cancel: "Cancel",
      nextLang: "es",
      flag: "/assets/flag-spain.png",
    },
    es: {
      switchTo: "Cambiar a Inglés",
      title: "Cambiar idioma",
      text: "¿Deseas cambiar el idioma a Inglés?",
      confirm: "Sí, cambiar",
      cancel: "Cancelar",
      nextLang: "en",
      flag: "/assets/flag-usa.png",
    },
  };

  const t = translations[language];

  const handleLanguageChange = () => {
    Swal.fire({
      title: t.title,
      text: t.text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: t.confirm,
      cancelButtonText: t.cancel,
      confirmButtonColor: "#f472b6",
      customClass: {
        actions: "justify-center", // Centra los botones
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setLanguage(t.nextLang as "en" | "es");
      }
    });
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="mx-2 focus:outline-none"
      title={t.switchTo}
    >
      <img
        src={t.flag}
        alt={t.switchTo}
        style={{ width: "30px", height: "30px", borderRadius: "4px" }}
      />
    </button>
  );
};
