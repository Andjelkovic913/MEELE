// slanje zahteva ka open ai

const express = require("express");

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname));

app.post("/api/chat", async (req, res) => {
  const { apiKey, model, messages, max_tokens } = req.body || {};
  const key = apiKey || process.env.OPENAI_API_KEY;
  if (!key) return res.status(400).json({ error: { message: "Missing API key." } });

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + key
      },
      body: JSON.stringify({ model, messages, max_tokens })
    });
    const data = await openaiRes.json();
    res.status(openaiRes.status).json(data);
  } catch (err) {
    res.status(502).json({ error: { message: "Could not reach OpenAI: " + err.message } });
  }
});

app.post("/api/image", async (req, res) => {
  const { apiKey, model, prompt, size, quality } = req.body || {};
  const key = apiKey || process.env.OPENAI_API_KEY;
  if (!key) return res.status(400).json({ error: { message: "Missing API key." } });

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + key
      },
      body: JSON.stringify({ model, prompt, size, quality })
    });
    const data = await openaiRes.json();
    res.status(openaiRes.status).json(data);
  } catch (err) {
    res.status(502).json({ error: { message: "Could not reach OpenAI: " + err.message } });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Brainrot Character Forge running at http://localhost:${PORT}`);
});
