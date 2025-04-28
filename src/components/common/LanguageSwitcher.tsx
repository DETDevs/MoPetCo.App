import { useLanguage } from "../../contexts/LanguageContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      switchTo: "Cambiar a español",
      title: "Cambiar idioma",
      text: "¿Deseas cambiar el idioma a Español?",
      confirm: "Sí, cambiar",
      cancel: "Cancel",
      nextLang: "es",
      flag: "/assets/flag-spain.png",
      buttonAriaLabel: "Change language to Spanish",
    },
    es: {
      switchTo: "Change to English",
      title: "Change Language",
      text: "Do you want to switch to English?",
      confirm: "Yes, switch",
      cancel: "Cancelar",
      nextLang: "en",
      flag: "/assets/flag-usa.png",
      buttonAriaLabel: "Change language to Spanish",
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
      scrollbarPadding: false,
      customClass: {
        actions: "justify-center",
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
      className="flex items-center gap-2 bg-white border border-gray-300
               rounded hover:bg-gray-50 transition-colors focus:outline-none
               px-2 py-1 text-sm md:px-2 md:py-1 md:text-xs md:mx-2 lg:w-[9rem]"
      title={t.switchTo}
      aria-label={t.buttonAriaLabel}
    >
      <img src={t.flag} alt="language" className="w-6 h-5" aria-hidden="true" />
      <span className="lg:inline font-medium text-gray-600 whitespace-nowrap">
        {t.switchTo}
      </span>
    </button>
  );
};
