
# ⚡ FlashSearch — AI-Powered Real-Time Search Engine

FlashSearch is a blazing-fast, AI-driven search engine that combines Google's **Gemini 2.0 Flash model** with **live web search** to deliver intelligent, source-backed answers instantly. Whether you're exploring a new topic, seeking quick summaries, or diving into research, FlashSearch responds with contextually grounded insights in real time.

---

## 🚀 Why FlashSearch?

Traditional search engines return links. FlashSearch gives you direct, AI-curated answers with live references — all within a fast, clean interface. It's your intelligent assistant for research, Q&A, and exploration, supercharged with Google's latest AI capabilities.

---

## ✨ Key Features

- 🔍 **Live Web Integration** — Real-time Google Search API results grounded in Gemini responses
- 🤖 **Gemini 2.0 Flash Model** — Optimized for speed and relevance
- 📑 **Citations Included** — Every answer comes with linked sources for verification
- 💬 **Conversational Context** — Maintain seamless follow-ups and question threads
- 💻 **Modern UI/UX** — Built with Tailwind CSS & shadcn/ui for a smooth user experience

---

## 🧱 Tech Stack

| Layer        | Stack                                      |
|--------------|---------------------------------------------|
| Frontend     | React, Vite, TypeScript, Tailwind CSS       |
| Backend      | Node.js, Express.js, TypeScript             |
| AI Layer     | Google Gemini 2.0 Flash API                 |
| Search Layer | Google Programmable Search Engine (PSE) API |
| UI Components| shadcn/ui                                   |

---

## 🧑‍💻 Getting Started

### 1. Prerequisites

Before you begin, ensure you have:

- Node.js ≥ 18
- npm or yarn
- A Google Cloud project with:
  - Gemini API access enabled
  - Custom Search JSON API enabled

---

### 2. Installation Steps

```bash
git clone https://github.com/thillai-c/AI_Search_engine
cd AI_Search_engine
npm install
```

---

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
GOOGLE_API_KEY=your_google_api_key
```

> ⚠️ Never share or commit your `.env` file to version control.

---

### 4. Running Locally

To start the development server:

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Development Commands

| Command         | Description                          |
|----------------|--------------------------------------|
| `npm run dev`   | Launch the development server        |
| `npm run build` | Build the app for production         |
| `npm run start` | Start the production build           |
| `npm run check` | Run TypeScript type checking         |

---

## 🌐 Environment Variables

| Variable         | Description                                  |
|------------------|----------------------------------------------|
| `GOOGLE_API_KEY` | Your Google Cloud API Key                    |
| `NODE_ENV`       | Set to `development` or `production`         |

---

## 🔐 Security Guidelines

- Do not expose your `.env` file or any API keys publicly.
- The `.gitignore` file is preconfigured to exclude sensitive data.
- When deploying, use a secure secret manager or environment config.

---

## 📚 References & Resources

- [Google Gemini API](https://ai.google.dev/)
- [Google Programmable Search Engine](https://programmablesearchengine.google.com/about/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Contributing

We welcome contributions! If you have improvements, ideas, or bug reports, feel free to open an issue or submit a pull request.

---

Built by [@thillai-c](https://github.com/thillai-c) with a vision to merge LLMs and live web data for the next-gen search experience.
