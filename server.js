require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/test-db', (req, res) => {
  db.query('SELECT 1', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Database terkoneksi dengan sukses!' });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server aktif di port ${PORT}`);
});
