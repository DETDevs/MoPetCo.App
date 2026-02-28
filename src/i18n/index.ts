import en from "./en.json";
import es from "./es.json";
import { useLanguage } from "../contexts/LanguageContext";

type TranslationKey = keyof typeof en;

const dictionaries: Record<string, Record<string, string>> = { en, es };

/**
 * Hook that returns a `t()` function to look up static UI translations
 * from the JSON dictionaries based on the current language.
 *
 * Usage:
 *   const { t } = useTranslation();
 *   <span>{t("nav.home")}</span>
 *
 * If the key is not found, it returns the key itself as a fallback.
 */
export function useTranslation() {
    const { language } = useLanguage();
    const dict = dictionaries[language] ?? dictionaries.en;

    function t(key: TranslationKey | string): string {
        return dict[key] ?? dictionaries.en[key] ?? key;
    }

    return { t, language } as const;
}

/**
 * Non-hook version for use outside of React components (e.g. in service layers).
 * Reads the language from localStorage directly.
 */
export function getStaticTranslation(key: string): string {
    const lang = localStorage.getItem("language") ?? "en";
    const dict = dictionaries[lang] ?? dictionaries.en;
    return dict[key] ?? dictionaries.en[key] ?? key;
}
