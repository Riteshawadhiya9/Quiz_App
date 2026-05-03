# The MOCK ARENA 🎯

> **MNC Placement Prep — All-in-One Technical Quiz App**

A comprehensive, dark-themed quiz application for software engineering interview preparation, covering **850+ curated questions** across core subjects tested at top MNC placements.

---

## 📚 Subjects Covered

| Subject | Questions | Topics |
|---|---|---|
| 🌐 **Computer Networks** | 150 | OSI, TCP/IP, Routing, Security, Protocols |
| ☕ **Java OOP** | 260 | Classes, Inheritance, Polymorphism, Design Patterns, SOLID |
| 📊 **DSA** | 225 | Arrays, Trees, Graphs, DP, Sorting, Searching |
| 🗄️ **SQL** | ~100 | Joins, Aggregation, Subqueries, Indexing, Transactions |
| 🛢️ **DBMS** | ~80 | Normalization, Transaction, Concurrency, SQL Queries, Architecture |
| 🖥️ **Operating Systems** | ~100 | Process Scheduling, Deadlocks, Memory Management, File Systems |
| ⚡ **JavaScript** | ~75 | Event Loop, Closures, Async/Await, Coercion, Prototypes, ES6+ |
| ⚛️ **React.js** | ~90 | Hooks, State, Context API, Performance, SSR, Concurrent Features |

---

## ✨ Features

- ⚡ **Instant feedback** — correct/wrong answer with detailed explanations
- 🔖 **Difficulty filtering** — Easy / Medium / Hard / Scenario
- 🏷️ **Topic filtering** — drill down by highly-specific interview topics
- 📄 **Pagination** — clean 10-questions-per-page layout
- 💾 **Progress persistence** — answers & active subject saved in `localStorage`
- 📊 **Score tracking** — live score counter per subject session
- 🌙 **Dark mode** — eye-friendly, beautiful UI design throughout

---

## 🗂️ Project Structure

```
techquiz-pro/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── QuizApp.jsx      # Main application logic and UI
│   ├── data/
│   │   ├── cn/              # Computer Networks
│   │   ├── dsa/             # DSA questions
│   │   ├── java/            # Java OOP questions
│   │   ├── sql/             # SQL questions
│   │   ├── os/              # Operating System questions
│   │   ├── dbms/            # Database Management Systems questions
│   │   ├── javascript/      # Modern JavaScript questions
│   │   └── react/           # React.js questions
│   ├── styles/
│   │   └── index.css        # Global styles & CSS reset
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
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
