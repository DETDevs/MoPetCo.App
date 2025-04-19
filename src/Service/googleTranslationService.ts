export const translateWithGoogle = async (
  text: string,
  targetLang: string
): Promise<string> => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

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

  if (data.error) {
    console.error("Google Translate API error:", data.error);
    throw new Error(data.error.message);
  }

  return data.data.translations[0].translatedText;
};
