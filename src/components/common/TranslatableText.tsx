// src/components/common/TranslatableText.tsx
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
        const translated = await translateWithGoogle(text, language);
        setTranslatedText(translated);
      } catch (error) {
        console.error("Translation failed:", error);
        setTranslatedText(text);
      }
    };

    if (language !== "en") {
      translate();
    } else {
      setTranslatedText(text);
    }
  }, [text, language]);

  return <span>{translatedText}</span>;
};
