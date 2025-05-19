# Express + PostgreSQL CRUD API

This is a simple RESTful API built using **Express.js** and **PostgreSQL**, providing basic CRUD operations on a `users` table.

## 📁 Project Structure

```
express-postgres-crud/
├── config/           # PostgreSQL database config
├── controllers/      # Logic for each route (CRUD operations)
├── routes/           # API endpoints and validations
├── .env              # Environment variables (DB credentials, PORT)
├── index.js          # Entry point for the app
├── package.json      # Dependencies and scripts
```

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/express-postgres-crud.git
cd express-postgres-crud
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file at the root of the project:

```env
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
PORT=3000
```

### 4. Create the Users Table

Run this SQL in your PostgreSQL DB:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  age INTEGER
);
```

### 5. Start the Server
```bash
npm run dev   # for development using nodemon
npm start     # for production
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/users`         | Fetch all users       |
| GET    | `/users/:id`     | Fetch single user     |
| POST   | `/users`         | Create new user       |
| PUT    | `/users/:id`     | Update existing user  |
| DELETE | `/users/:id`     | Delete a user         |

### Request Body Format

#### POST / PUT `/users`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

---

## Validation

- Name must not be empty.
- Email must be a valid email format.
- Age must be a non-negative integer.

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- express-validator
- dotenv

---

## Notes

- This is a learning/demo project. For production, consider adding:
  - Authentication/Authorization
  - Logging & Monitoring
  - Tests (Jest or Mocha)
  - Docker support

---

## 📄 License

No license specified. Feel free to use this code for educational purposes.
```
Author: [Bitrus Edward]
