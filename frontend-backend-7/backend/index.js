// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Test route
app.get('/test', (req, res) => {
  res.send('Hello, Express!');
});

// API route to fetch comments
app.get('/api/comments', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
