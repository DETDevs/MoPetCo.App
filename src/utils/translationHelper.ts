import { translateWithGoogle } from "../Service/googleTranslationService";

export const getTranslation = async (text: string, language: string): Promise<string> => {
  if (language === "en") return text;

  const cachedTranslations = localStorage.getItem(`translations_${language}`);
  if (cachedTranslations) {
    const translations = JSON.parse(cachedTranslations);
    if (translations[text]) {
      return translations[text];
    }
  }

  const translated = await translateWithGoogle(text, language);
  return translated;
};
