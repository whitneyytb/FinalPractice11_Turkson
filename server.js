const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello from your very first API!'
    });
});

app.post('/api/notes', (req, res) => {
    const { name, note } = req.body;

    if (!name || !note) {
        return res.status(400).json({
            error: 'Both name and note are required.'
        });
    }

    res.status(201).json({
        message: 'Note received!',
        data: {
            name,
            note
        }
    });
});

app.get('/', (req, res) => {
    res.send('My Express app is live!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});