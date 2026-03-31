const axios = require("axios");
const OPENAI_KEY = "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"; // buraya kendi OpenAI key

async function generateScript(trendTitle) {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{
        role: "user",
        content: `Bu trend başlıktan viral YouTube Shorts scripti üret: ${trendTitle}.
20 saniye, şok edici, merak uyandırıcı, açık bitir.`
      }]
    },
    { headers: { Authorization: `Bearer ${OPENAI_KEY}` } }
  );

  return res.data.choices[0].message.content;
}

module.exports = { generateScript };