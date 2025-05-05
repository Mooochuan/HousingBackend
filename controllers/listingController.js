const db = require('../config/db');

async function createListing(req, res) {
    const { title, description, rent, address, rooms, contact } = req.body;

    try {
        const [result] = await db.execute(
            `INSERT INTO listings
         (title, description, rent, address, rooms, contact)
       VALUES (?, ?, ?, ?, ?, ?)`,
            [title, description, rent, address, rooms, contact]
        );
        res.status(201).json({ id: result.insertId });
    } catch (e) {
        console.error('Insertion failed：', e);
        res.status(500).json({ error: 'Server error' });
    }
}

async function listAll(req, res) {
    try {
        const [rows] = await db.query(
            `SELECT id, title, rent, address, rooms, contact, description, created_at
       FROM listings
       ORDER BY created_at DESC`
        );
        res.json(rows);
    } catch (e) {
        console.error('List failed：', e);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { createListing, listAll };
