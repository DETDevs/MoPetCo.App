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
          setTranslatedText(text); 
          return;
        }

        const cachedTranslations = localStorage.getItem(`translations_${language}`);
        if (cachedTranslations) {
          const translations = JSON.parse(cachedTranslations);
          if (translations[text]) {
            setTranslatedText(translations[text]);
            return;
          }
        }

        const translated = await translateWithGoogle(text, language);
        setTranslatedText(translated);
      } catch (error) {
        console.error("Translation failed:", error);
        setTranslatedText(text); 
      }
    };

    translate();
  }, [text, language]);

  return <span>{translatedText}</span>;
};
