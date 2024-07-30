const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server! ghhg');
});

// Sample route to handle requests
app.get('/api/users', (req, res) => {
    // Normally you'd fetch from a real database here
    res.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ]);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
