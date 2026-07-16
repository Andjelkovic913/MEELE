module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: { message: "Method not allowed" } });
    return;
  }

  const { apiKey, model, prompt, size, quality } = req.body || {};
  const key = apiKey || process.env.OPENAI_API_KEY;
  if (!key) {
    res.status(400).json({ error: { message: "Missing API key." } });
    return;
  }

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
};
