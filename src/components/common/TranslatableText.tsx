import React from "react";
import { useTranslation } from "../../i18n";

interface TranslatableTextProps {
  text: string;
}

/**
 * Renders translated text for static UI strings.
 *
 * How it works:
 * - Looks up `text` as a key in the JSON dictionaries (en.json / es.json).
 * - If the key exists → uses the translated value.
 * - If the key does NOT exist → renders the original `text` as-is.
 *   This is the fallback for dynamic content from the API (service titles,
 *   promo descriptions, reviews, etc.) that cannot be pre-translated.
 */
export const TranslatableText: React.FC<TranslatableTextProps> = ({ text }) => {
  const { t } = useTranslation();
  return <span>{t(text)}</span>;
};
