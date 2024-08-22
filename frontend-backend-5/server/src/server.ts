import jsonServer from 'json-server';
import path from 'path';
import express from 'express';

// Create an Express application
const app = express();

// Setup JSON Server with a database file
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Use middlewares and JSON Server routes
app.use(middlewares);
app.use(jsonServer.rewriter({
  '/api/*': '/$1',
}));
app.use('/api', router);

// Define a port
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
