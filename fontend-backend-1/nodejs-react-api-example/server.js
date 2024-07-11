const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

// Sample data
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];

app.use(cors());

// API endpoint
app.get('/api/books', (req, res) => {
    res.json(books);
  });
  
  // Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
