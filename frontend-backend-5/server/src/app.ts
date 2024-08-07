import express from 'express';
import "dotenv/config";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/products', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      res.json(data)
      console.log(data)
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {
      res.json(data)
      console.log(data)
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is running on port: ", port);
});

export default app;
