# HousingPanda (Simple Demo)

A minimal full‑stack demo showing how to build a housing listing application with:

- **Back‑end**: Node.js + Express + MySQL  
- **Front‑end**: Static HTML + vanilla JavaScript `fetch`

---

## Project Structure

```plaintext
housing-panda/
├── app.js
├── config/
│   └── db.js
├── controllers/
│   └── listingController.js
├── routes/
│   └── listingRoutes.js
├── public/
│   ├── new.html
│   └── list.html
└── package.json
```

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourname/housing-panda.git
   cd housing-panda
   ```
2. **Install dependencies** 
   ```bash
   npm install
   ```
3. **Create the MySQL database and listing table**
   ```sql
   CREATE DATABASE housing_panda
     CHARACTER SET utf8mb4
     COLLATE utf8mb4_unicode_ci;
   USE housing_panda;
   CREATE TABLE listings (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(100) NOT NULL,
     description TEXT NOT NULL,
     rent DECIMAL(10,2) NOT NULL,
     address VARCHAR(255) NOT NULL,
     rooms INT NOT NULL,
     contact VARCHAR(100) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   ) ENGINE=InnoDB;

4. **Start the application**
   ```bash
   npm start
   ```

