# Node.js Demo App - CI/CD Pipeline

## 📋 Project Overview
This project demonstrates a complete CI/CD pipeline using GitHub Actions, Docker, and Node.js.

## 🛠️ Technologies Used
- Node.js & Express
- Docker
- GitHub Actions
- Jest (Testing)
- DockerHub

## 🚀 CI/CD Pipeline Workflow

### Pipeline Stages:
1. **Test** - Run automated tests
2. **Build** - Build Docker image
3. **Push** - Push image to DockerHub
4. **Deploy** - Deployment notification

### Triggers:
- Automatic trigger on push to `main` branch
- Manual trigger on pull requests

## 📦 Local Setup

### Prerequisites
- Node.js 18+
- Docker
- Git

### Installation
```bash
# Clone repository
git clone <your-repo-url>
cd nodejs-demo-app

# Install dependencies
npm install

# Run tests
npm test

# Start application
npm start
```

### Docker Commands
```bash
# Build image
docker build -t nodejs-project-1 .

# Run container
docker run -p 3000:3000 nodejs-project-1

# Access application
curl http://localhost:3000
```

## 🔐 GitHub Secrets Setup

Add these secrets in GitHub Repository Settings → Secrets and variables → Actions:

1. `DOCKER_USERNAME` - Your DockerHub username
2. `DOCKER_PASSWORD` - Your DockerHub password/token

## 🧪 Testing the Pipeline

1. Make changes to code
2. Commit and push to main branch
3. Check Actions tab in GitHub
4. Monitor pipeline execution
5. Verify Docker image on DockerHub

## 🎯 Learning Outcomes
- Understanding CI/CD automation
- GitHub Actions workflow configuration
- Docker containerization
- Automated testing integration
- Secrets management

