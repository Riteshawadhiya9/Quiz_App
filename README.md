# The MOCK ARENA 🎯

> **MNC Placement Prep — All-in-One Technical Quiz App**

A comprehensive, dark-themed quiz application for software engineering interview preparation, covering **600+ curated questions** across four core subjects tested at top MNC placements.

---

## 📚 Subjects Covered

| Subject | Questions | Topics |
|---|---|---|
| 🌐 **Computer Networks** | 150 | OSI, TCP/IP, Routing, Security, Protocols |
| ☕ **Java OOP** | 260 | Classes, Inheritance, Polymorphism, Design Patterns, SOLID |
| 📊 **DSA** | 225 | Arrays, Trees, Graphs, DP, Sorting, Searching |
| 🗄️ **SQL** | ~100 | Joins, Aggregation, Subqueries, Indexing, Transactions |

---

## ✨ Features

- ⚡ **Instant feedback** — correct/wrong answer with detailed explanations
- 🔖 **Difficulty filtering** — Easy / Medium / Hard
- 🏷️ **Topic filtering** — drill down by specific topic within each subject
- 📄 **Pagination** — clean 10-questions-per-page layout
- 💾 **Progress persistence** — answers & active subject saved in `localStorage`
- 📊 **Score tracking** — live score counter per subject session
- 🌙 **Dark mode** — eye-friendly design throughout

---

## 🗂️ Project Structure

```
techquiz-pro/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── QuizApp.jsx      # Main quiz component (CN data inline, imports others)
│   ├── data/
│   │   ├── cn/              # Computer Networks (inline in QuizApp.jsx)
│   │   ├── dsa/             # DSA questions (5 split files + index.js)
│   │   │   ├── index.js
│   │   │   ├── dsa_questions_1.js
│   │   │   ├── dsa_questions_2.js
│   │   │   ├── dsa_questions_3.js
│   │   │   ├── dsa_questions_4.js
│   │   │   └── dsa_questions_5.js
│   │   ├── java/            # Java OOP questions (3 split files + index.js)
│   │   │   ├── index.js
│   │   │   ├── java_questions_1.js
│   │   │   ├── java_questions_2.js
│   │   │   └── java_questions_3.js
│   │   └── sql/             # SQL questions
│   │       └── index.js
│   ├── styles/
│   │   └── index.css        # Global styles & CSS reset
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/techquiz-pro.git
cd techquiz-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool & dev server
- **Vanilla CSS** — Custom dark-theme styling
- **localStorage** — Client-side persistence (no backend needed)

---

## 📝 License

This project is for personal and educational use. Feel free to fork and extend!
