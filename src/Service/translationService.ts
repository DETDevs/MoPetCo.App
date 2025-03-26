export const translateText = async (text: string, targetLang: string) => {
  const response = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: targetLang,
      format: "text",
      alternatives: 3,
      api_key: "",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Translation error:", error);
    throw new Error("Translation failed: " + error);
  }

  const data = await response.json();
  return data.translatedText;
};
