# 🎓 LearnMate – Personalized Course Path Recommender

LearnMate is an AI-driven web application that recommends personalized learning pathways to students based on their interest area and current skill level. It dynamically builds course suggestions and provides intelligent explanations using simulated IBM Granite AI logic.

---

## 🚀 Features

- 🔍 Choose an interest area (Frontend, Cybersecurity, UI/UX Design)
- 🎯 Select your skill level (Beginner, Intermediate, Advanced)
- 📚 Receive tailored course recommendations
- 💬 Get AI-style explanations for why these courses were recommended
- ☁️ Ready for deployment on IBM Cloud or IBM Code Engine

---

## 🛠️ Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | HTML, CSS, JavaScript|
| Backend     | Node.js, Express.js  |
| AI Logic    | Simulated IBM Granite|
| Dataset     | JSON (`courses.json`)|
| Deployment  | IBM Cloud (Cloud Foundry or Code Engine) |

---
## 📁 Folder Structure

learnmate/
├── frontend/ # UI code
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend/ # Server logic
│ ├── app.js
│ ├── recommender.js
│ └── routes/api.js
│
├── data/
│ └── courses.json # Course dataset
│
├── ibm/
│ ├── simulated_granite.js # AI explanation generator
│ └── watson_nlu.js # (optional) NLP keyword extractor
│
├── deploy/
│ ├── manifest.yml
│ └── Dockerfile
│
├── docs/
│ ├── report.pdf
│ ├── presentation.pptx
│ └── screenshots/
│
├── public/
│ └── favicon.ico
│
├── .gitignore
├── package.json
├── README.md
└── server.js

---

## ⚙️ Installation (Local Setup)

```bash
# Clone the repository
git clone https://github.com/yourusername/learnmate.git
cd learnmate

# Install backend dependencies
npm install

# Start the server
npm run dev

# Open frontend/index.html in your browser
```

---

### ☁️ IBM Cloud Deployment (Code Engine Recommended)
Install IBM Cloud CLI

Login:
```ibmcloud login --sso```

Push to IBM Cloud:

bash
```
ibmcloud plugin install cloud-foundry  # (if using Cloud Foundry)
ibmcloud cf push
```
Or use Dockerfile for IBM Code Engine.

---
### 📄 License
This project is part of the IBM Edunet Foundation internship program and is intended for academic use.



