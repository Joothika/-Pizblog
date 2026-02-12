# 🍕 Piz Blog

**Pizblog** is MERN Application for pizza lover's. Where users are able visit pizza blog on daily basis also featured. They can visit all blogs also apply filters, search and add comments to the blog 

---

## 🛡 Features

- Blog Listing on daily basis, featured, all
- Secure admin authorization
- Admin can view dashboard and manage CRUD operation on blog and comment
- Deployment through render and vercel

---

## 🧰 Tech Stack

| Layer | Technology |
|------ | ---------- |
| **Frontend** | React.js , Tailwindcss |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Deployment** | Render , Vercel |

---

## ⚙️ Development Setup

### Frontend Setup

```bash

# Navigate to frontend
cd client

# Install dependencies
npm install or npm i

# Configure .env file
VITE_BASE_URL = 'set local/production API url'
Example: VITE_BASE_URL = http://localhost:3000/api

# Run frontend
npm run dev

```

### Backend Setup

```bash

# Navigate to backend
cd server

# Install dependencies
npm install or npm i

# Configure .env file
ADMIN_EMAIL = 'set admin email'
ADMIN_PASSWORD = 'set admin password'
JWT_SECRET = 'set JWT secret'
MONGO_URI = 'set mongo connection string'
PORT = 'set port'

# Run frontend
npm run start

```
---

## 📢 Deployment 

| Service | URL |
| ------- | --- |
| **Frontend** | https://pizblog.vercel.app |
| **Backend** | https://pizblog.onrender.com |

---

## 👩 Author

- **Developer:** Jo

- **Project:** Pizblog

- **Year:** 2026
