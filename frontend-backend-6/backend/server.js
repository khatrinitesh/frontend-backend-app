const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Sample routes
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js server");
});

app.get("/api/home", (req, res) => {
  res.json({ message: "Welcome to the Home page from the server" });
});

app.get('/api/about', (req, res) => {
    res.json({ message: 'Welcome to the About page from the server' });
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
