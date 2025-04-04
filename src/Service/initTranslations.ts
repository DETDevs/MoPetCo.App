import { translateWithGoogle } from "../Service/googleTranslationService";

export const initTranslations = async () => {
  try {
    const targetLang = localStorage.getItem("selectedLanguage") || "en";

    const textsToTranslate = [
      "Home",
      "About",
      "Services",
      "Gallery",
      "Contact",
      "Release Form",
      "FAQs",
      "Fetching cuteness...",
      "See all reviews on Google",
      "Book an appointment",
      "Because every pet deserves to shine",
      "What Our Clients Are Saying",
      "Discover why pet lovers trust MoPetCo for their furry friends' grooming needs"
    ];

    const cachedTranslations = localStorage.getItem(`translations_${targetLang}`);
    if (cachedTranslations) {
      console.log("✅ Traducciones cargadas desde cache");
      return JSON.parse(cachedTranslations);
    }

    const translations = await Promise.all(
      textsToTranslate.map(async (text) => {
        try {
          const translated = await translateWithGoogle(text, targetLang);
          return { original: text, translated };
        } catch (error) {
          console.error("Error translating text:", text, error);
          return { original: text, translated: text }; // fallback
        }
      })
    );

    const translationsObject = translations.reduce((acc, { original, translated }) => {
      acc[original] = translated;
      return acc;
    }, {} as Record<string, string>);

    localStorage.setItem(`translations_${targetLang}`, JSON.stringify(translationsObject));

    console.log("✅ Traducciones iniciales cargadas");
    return translationsObject;

  } catch (error) {
    console.error("Error during initTranslations:", error);
    return {}; // para evitar que rompa
  }
};
