# 🧪 Workshop 02 - Pokeneas Pokedex

This project was developed in pairs for Workshop 02 using **Node.js with Express**, **Docker**, and **AWS EC2**.

## 👥 Participants
- Kevin Quiroz ([GitHub](https://github.com/KevinQzG))
- Juan Felipe Restrepo ([GitHub](https://github.com/JuanFelipeRestrepoBuitrago))

---

## 📦 Project Description

**Pokenea** is a custom Pokedex inspired by Antioquian culture. Each Pokenea entry includes:
- ID
- Name
- Height
- Skill
- Image (hosted on public Amazon S3 bucket)
- Philosophical phrase

---

## 🚀 Features

The system exposes two main routes:

1. **`/pokenea-json`** → Returns a JSON with:
   - ID, name, height, and skill of a random Pokenea
   - The container ID where the application is running

2. **`/pokenea-img`** → Displays:
   - The image of a random Pokenea
   - Its philosophical phrase
   - The container ID

---

## ⚙️ Tech Stack

- Node.js + Express
- Docker + Docker Swarm
- AWS EC2 (1 leader node + 3 manager nodes)
- GitHub Actions for CI/CD
- DockerHub
- Amazon S3 (for Pokenea images)

---

## 🐳 Deployment on Docker Swarm

The service is deployed across multiple AWS EC2 instances using Docker Swarm with **10 replicas**, each capable of handling requests and displaying different container IDs.

---

## 🌐 Application Access

- **Student 1 IP**: _________________________
- **Student 2 IP**: _________________________

---

## ✅ Verification

- Confirm both routes respond correctly with varying container IDs.
- Screenshots of:
  - EC2 console showing the 10 replicas
  - S3 bucket with uploaded images
  - App running with different Pokenea and container IDs

---

## 📁 Project Structure

- `backend/`: Contains the Express server.
  - `src/index.js`: Main entry point.
  - `src/routes/`: API endpoints.
- `frontend/`: Contains the React app (optional UI).
  - `src/App.jsx`: Main component.
  - `src/index.js`: App entry point.
  - `src/index.css`: Tailwind CSS config.

---

## 🛠️ Prerequisites

- **Node.js**: Version 18+ → [nodejs.org](https://nodejs.org/)
- **npm**: Included with Node.js
- **Docker**: Installed and running locally
- **AWS CLI** (optional for EC2 setup)

---

## 🧪 Running the App Locally

### Clone the repository

```bash
git clone https://github.com/kevinqzg/Pokedex-Pokeneas.git
cd Pokedex-Pokeneas
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs on `http://localhost:5000`.

### Frontend Setup (Optional UI)

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:3000`.

---

## 📜 Available Scripts (Frontend)

Inside `frontend/` you can run:

- `npm start`: Launch the app in dev mode.
- `npm test`: Run test runner in watch mode.
- `npm run build`: Create production build.
- `npm run eject`: Remove CRA abstraction (irreversible).

## 📜 Available Scripts (Backend)
Inside `backend/` you can run:
- `npm start`: Launch the server.
- `npm run dev`: Launch the server with nodemon for development.
- `npm test`: Run tests.
- `npm run lint`: Run ESLint for code quality checks.
---

## 📚 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
