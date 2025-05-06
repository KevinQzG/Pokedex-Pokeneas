# 🧪 Workshop 02 - Pokenea Pokedex
This project was developed in pairs for Workshop 02 using **Node.js with Express**, **Docker**, and **AWS EC2**.

## 👥 Participants
- Kevin Quiroz ([GitHub](https://github.com/KevinQzG))
- Juan Felipe Restrepo ([GitHub](https://github.com/JuanFelipeRestrepoBuitrago))

## 📦 Project Description

**Pokenea** is a custom Pokedex inspired by Antioquian culture. Each Pokenea entry includes:
- ID
- Name
- Height
- Skill
- Image (hosted on public Amazon S3 bucket)
- Philosophical phrase

## 🚀 Features

The system exposes two main routes:

1. **`/pokenea-json`** → Returns a JSON with:
   - ID, name, height, and skill of a random Pokenea
   - The container ID where the application is running

2. **`/pokenea-img`** → Displays:
   - The image of a random Pokenea
   - Its philosophical phrase
   - The container ID

## ⚙️ Tech Stack

- Node.js + Express
- Docker + Docker Swarm
- AWS EC2 (1 leader node + 3 manager nodes)
- GitHub Actions for CI/CD
- DockerHub
- Amazon S3 (for Pokenea images)

## 🐳 Deployment on Docker Swarm

The service is deployed across multiple AWS EC2 instances using Docker Swarm with **10 replicas**, each capable of handling requests and displaying different container IDs.

## 🌐 Application Access

- **Student 1 IP**: _________________________
- **Student 2 IP**: _________________________

## ✅ Verification

- Confirm both routes respond correctly with varying container IDs.
- Screenshots of:
  - EC2 console showing the 10 replicas
  - S3 bucket with uploaded images
  - App running with different Pokenea and container IDs
