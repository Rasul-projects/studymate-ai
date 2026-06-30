# StudyMate AI 🎓🤖
### AI-Powered Personalized Learning Assistant — Built for Technoviz Summer of Code (TSOC) 2026


## 📖 Project Description

**Problem Statement**
Students often struggle to manage study schedules, identify weak topics, and get instant doubt-clearing help outside classroom hours. Generic study apps don't adapt to an individual's pace or learning gaps.

**Solution Overview**
StudyMate AI is a web application that uses an LLM-powered chatbot combined with a topic-tracking dashboard to give students personalized study plans, instant Q&A support, and progress analytics — all in one place.

**Who Benefits**
School and college students preparing for exams, self-learners, and anyone who needs a low-cost, always-available study companion.

**What Makes It Unique**
Unlike static flashcard apps, StudyMate AI adapts its recommendations based on quiz performance and chat history, creating a feedback loop that gets smarter the more a student uses it.

---

## ✨ Features
- 🧠 AI chatbot for instant doubt resolution (powered by an LLM API)
- 📊 Personalized study dashboard with progress tracking
- 📅 Auto-generated study schedules based on weak topics
- 📝 Quiz generator with instant feedback
- 🔐 Secure user authentication
- 📱 Responsive design — works on mobile and desktop

---

## 🛠 Technology Stack
| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| AI/ML | OpenAI API / Hugging Face Transformers |
| Auth | JWT |
| Deployment | Vercel (frontend), Render (backend) |



---

## 📂 Folder Structure
```
studymate-ai/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── server/                  # Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
├── docs/
│   └── screenshots/
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Installation Guide

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas URI)
- An API key for your chosen AI provider

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/studymate-ai.git
cd studymate-ai

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install

# 4. Set up environment variables
cp .env.example .env
# Fill in: MONGO_URI, JWT_SECRET, AI_API_KEY

# 5. Run backend
cd ../server
npm run dev

# 6. Run frontend (in a new terminal)
cd ../client
npm run dev
```

App runs at `http://localhost:5173` (frontend) and `http://localhost:5000` (backend).

---

## 🧪 How to Test It
1. Register a new account on the signup page.
2. Log in and land on the dashboard.
3. Ask the chatbot a sample question (e.g., "Explain Newton's second law").
4. Take the auto-generated quiz on any topic.
5. Check the progress dashboard updates after quiz submission.
6. (Optional) Run automated tests:
```bash
cd server
npm test
```


## 🚀 Live Demo
🔗 https://rasul-projects.github.io/studymate-ai/
🔗 https://studymate-ai-wine.vercel.app/


---

## 🔭 Future Scope
- Mobile app version (React Native)
- Voice-based doubt solving
- Integration with school LMS platforms
- Multilingual support



---

