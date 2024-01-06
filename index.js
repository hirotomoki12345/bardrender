const express = require('express');
const { BardAPI } = require('bard-api-node');

const app = express();
const port = 3000; // 任意のポート番号を指定

app.get('/ask', async (req, res) => {
  try {
    const { question } = req.query;

    if (!question) {
      return res.status(400).json({ error: 'Question parameter is required.' });
    }

    const assistant = new BardAPI();

    // Set session information for authentication if needed
    // await assistant.setSession('__Secure-1PSID', 'YourSecure1PSIDToken');

    // Send a query to Bard
    const response = await assistant.getBardResponse(question);

    res.json({ answer: response.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
