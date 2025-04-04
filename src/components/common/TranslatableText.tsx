import React, { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translateWithGoogle } from "../../Service/googleTranslationService";

interface TranslatableTextProps {
  text: string;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({ text }) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState<string>(text);

  useEffect(() => {
    const translate = async () => {
      try {
        if (language === "en") {
          setTranslatedText(text); // ✅ Si el idioma es inglés, no hacemos nada
          return;
        }

        // ✅ Revisamos la cache local primero
        const cachedTranslations = localStorage.getItem(`translations_${language}`);
        if (cachedTranslations) {
          const translations = JSON.parse(cachedTranslations);
          if (translations[text]) {
            setTranslatedText(translations[text]);
            return;
          }
        }

        // ✅ Si no está en cache, traducimos con la API
        const translated = await translateWithGoogle(text, language);
        setTranslatedText(translated);
      } catch (error) {
        console.error("Translation failed:", error);
        setTranslatedText(text); // Fallback al texto original
      }
    };

    translate();
  }, [text, language]);

  return <span>{translatedText}</span>;
};
