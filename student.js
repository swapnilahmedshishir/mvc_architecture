const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// MySQL Connection Pooling
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware to parse JSON
app.use(express.json());

// CRUD routes

// Create
app.post('/items', (req, res) => {
  const newItem = req.body;
  pool.query('INSERT INTO items SET ?', newItem, (error, results) => {
    if (error) throw error;
    newItem.id = results.insertId;
    res.json(newItem);
  });
});

// Read (Get all items)
app.get('/items', (req, res) => {
  pool.query('SELECT * FROM items', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Read (Get a specific item by ID)
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  pool.query('SELECT * FROM items WHERE id = ?', [itemId], (error, results) => {
    if (error) throw error;
    if (results.length === 0) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// Update
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  pool.query('UPDATE items SET ? WHERE id = ?', [updatedItem, itemId], (error) => {
    if (error) throw error;
    res.json({ success: true });
  });
});

// Delete
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  pool.query('DELETE FROM items WHERE id = ?', [itemId], (error) => {
    if (error) throw error;
    res.json({ success: true });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
