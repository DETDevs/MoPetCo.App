import React, { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translateWithGoogle } from "../../Service/googleTranslationService";

interface TranslatableTextProps {
  text: string;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({ text }) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState<string>(text);
  const apiKey = "AIzaSyCUknJLzYxHC6UCT4Fqn6dHywgTVcuPK0w"; // Idealmente guarda esto en .env

  useEffect(() => {
    const translate = async () => {
      const translated = await translateWithGoogle(text, language, apiKey);
      setTranslatedText(translated);
    };

    if (language !== "en") {
      translate();
    } else {
      setTranslatedText(text);
    }
  }, [text, language]);

  return <span>{translatedText}</span>;
};
