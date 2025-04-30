const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'mysql_user',
    password: process.env.DB_PASS || 'mysql_password',
    database: process.env.DB_NAME || 'housing_panda',
    waitForConnections: true,
    connectionLimit: 5,
    charset: 'utf8mb4',
});

module.exports = db;
