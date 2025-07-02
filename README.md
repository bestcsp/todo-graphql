# 🚀 GraphQL Todo App

A **full-stack Todo app** using:
- **Frontend:** Vite + React + TypeScript + Apollo Client
- **Backend:** Apollo Server (GraphQL) + TypeScript + MongoDB
- **Database:** MongoDB via Docker

---

## ⚡ Quick Start

### 🐳 1. Start MongoDB

Run MongoDB using Docker without installing locally:

```bash
docker compose up -d
```

---

### 🚀 2. Run Backend

```bash
cd backend
npm install
```

Create `.env` in `backend/`:

```
MONGO_URI=mongodb://root:password@localhost:27017/
```

Start the server:

```bash
npm run dev
```

GraphQL Playground:
```
http://localhost:4000
```

---

### 🌐 3. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open in browser:
```
http://localhost:5173
```

---

## ✅ Features

- Add, toggle, delete todos
- GraphQL API using Apollo Server
- Apollo Client for frontend GraphQL operations
- Hot reload for fast development
- MongoDB persistence via Docker

---

## 📄 License

MIT

---

## ✨ Summary

This **clean, minimal boilerplate** lets you learn and build with:

- Vite + React + TypeScript + GraphQL
- Apollo Client + Server
- MongoDB (via Docker)

in a **fast, practical setup** for your projects or learning pipeline.

---

🚀 **Happy Building!**
