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
- Rarity level

The frontend is built directly using **EJS templates** with **Tailwind CSS**, ensuring a stylized and lightweight user interface, without requiring React or separate frontend tooling.

---

## 🚀 Features

The system exposes three main routes:

1. **`/`** → Displays all Pokeneas with:
   - Tailwind-styled cards
   - Philosophical phrase
   - Rarity label and container ID

2. **`/pokenea-json`** → Returns a JSON with:
   - Random Pokenea's ID, name, height, skill
   - Container ID

3. **`/pokenea-img`** → Displays a single Pokenea (random) with:
   - Image, phrase, and container ID

---

## ⚙️ Tech Stack

- Node.js + Express
- EJS (Embedded JavaScript templates)
- Tailwind CSS
- Docker + Docker Swarm
- AWS EC2 (1 leader node + 3 manager nodes)
- GitHub Actions (for CI/CD)
- DockerHub
- Amazon S3 (public image hosting)

---

## 📁 Project Structure

```
pokenea-app/
├── public/
│   ├── favicon.png         ← App icon
├── src/
│   ├── routes/
│   │   └── server.js       ← API routes and views logic
│   ├── views/
│   │   └── index.ejs       ← Main EJS view for Pokeneas
├── .env
├── package.json
├── tailwind.config.js
```

---

## 🧪 Running the App Locally

### 1. Clone the Repository

```bash
git clone https://github.com/kevinqzg/Pokedex-Pokeneas.git
cd Pokedex-Pokeneas/pokenea-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Runs on: `http://localhost:5005`

---

## 🐳 Docker Swarm Deployment

Deployed across 4 EC2 instances:
- 1 Leader node (`docker swarm init`)
- 3 Manager nodes (joined via `docker swarm join`)
- 10 replicas of the app using:

```bash
docker service create --replicas 10 --name pokeneas-app -p 80:5005 your-dockerhub-username/pokeneas-app
```

---

## 🌐 Application Access

- **Student 1 IP**: `_________________________`
- **Student 2 IP**: `_________________________`

---

## ✅ Verification

- [x] `/` shows all Pokeneas in cards with container ID
- [x] `/pokenea-img` renders one Pokenea in full card view
- [x] `/pokenea-json` returns random Pokenea in JSON
- [ ] Container ID changes with different replicas

---

## 📚 Learn More

- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker Swarm Setup](https://docs.docker.com/engine/swarm/)
- [Amazon EC2](https://aws.amazon.com/ec2/)
