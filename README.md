# studymate-ai
# StudyMate AI 🎓🤖
### AI-Powered Personalized Learning Assistant — Built for Technoviz Summer of Code (TSOC) 2026

> ⚠️ **Before you submit:** This is a ready-to-use template built around an example project idea (AI/ML theme). Replace the project name, description, screenshots, tech stack, and code with your *actual* work — TSOC checks for original, disclosed contributions, and judges may ask you to explain your code.

---

## 📌 Repository Name
```
studymate-ai
```
*(Use lowercase, hyphen-separated — GitHub convention, looks clean in URLs and on Devpost.)*

---

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

*(Swap these for your actual stack — keep the table format, judges scan it fast.)*

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

---

## 🎥 Demo Video (3–5 min) — What to Record

Use **OBS Studio** (free) or **Loom** for screen recording.

**Structure to follow (matches TSOC's required format):**

| Time | Section | What to say/show |
|---|---|---|
| 0:00–0:30 | Intro | Your name, team, project name, one-line pitch |
| 0:30–1:00 | Problem Statement | The real problem you're solving and why it matters |
| 1:00–3:30 | Live Demo | Walk through key features live — signup, chatbot, quiz, dashboard. Narrate as you click. |
| 3:30–4:15 | Technical Architecture | Quick screen of your folder structure or a simple diagram — "frontend talks to backend via REST API, backend calls the AI API, data stored in MongoDB" |
| 4:15–4:45 | Future Scope | 2–3 things you'd add next |
| 4:45–5:00 | Conclusion | Thank judges, repo link on screen |

**Recording tips:**
- Record in 1080p, keep your face cam small (bottom corner) if you want a personal touch — optional.
- Close unrelated tabs/notifications before recording.
- Do a dry run first — scripted demos look more confident than improvised ones.
- Upload to YouTube as **Unlisted** (not Private — judges need the link to work without permission requests).
- Add the YouTube link to your README and Devpost submission.

---

## 🚀 Live Demo
🔗 [Add your deployed link here] — or if not deployed, the install steps above work as a fallback.

---

## 🔭 Future Scope
- Mobile app version (React Native)
- Voice-based doubt solving
- Integration with school LMS platforms
- Multilingual support

---

## 👥 Team
| Name | Role | GitHub |
|---|---|---|
| [Your Name] | Full-stack Dev | [@yourhandle] |
| [Teammate] | AI/ML | [@handle] |

---

## 📄 License

Recommended: **MIT License** — simplest, most permissive, and what most hackathon judges expect to see. Use it unless you have a specific reason not to (e.g., you want to prevent commercial reuse → use **Apache 2.0** instead, which also adds patent protection).

```
MIT License

Copyright (c) 2026 [Your Name / Team Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
Save this as a separate `LICENSE` file in your repo root (GitHub auto-detects it and shows a badge).

---

## ✅ Pre-Submission Checklist
- [ ] Repo is public
- [ ] README filled with real project details
- [ ] LICENSE file added
- [ ] .env / API keys NOT committed (check `.gitignore`)
- [ ] Screenshots added to `docs/screenshots/`
- [ ] Demo video recorded, under 5 min, uploaded as Unlisted on YouTube
- [ ] Live deployment link added (or local run instructions confirmed working)
- [ ] Team members listed
- [ ] Commit history shows real progress (not one giant commit)
