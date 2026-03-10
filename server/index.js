require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'PromptVerse API is running!' });
});

// Define some static topics we can fetch from the backend later
const topics = [
    { id: '1', title: 'What is Prompt Engineering?', slug: 'what-is-pe' },
    { id: '2', title: 'Why It Matters', slug: 'why-it-matters' },
    { id: '3', title: 'Prompting Techniques', slug: 'techniques' },
    { id: '4', title: 'Real-World Examples', slug: 'examples' },
    { id: '5', title: 'Best Practices', slug: 'best-practices' }
];

app.get('/api/topics', (req, res) => {
    res.json(topics);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
