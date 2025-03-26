// src/services/googleTranslationService.ts
export const translateWithGoogle = async (
    text: string,
    targetLang: string,
    apiKey: string
  ) => {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          format: "text",
        }),
      }
    );
  
    const data = await response.json();
  
    if (data.error) throw new Error(data.error.message);
  
    return data.data.translations[0].translatedText;
  };
  