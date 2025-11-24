# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- @vitejs/plugin-react uses Babel for Fast Refresh
- @vitejs/plugin-react-swc uses SWC for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled.

---

# 🤖 Chatbot Project – React + Vite Upgrade

This chatbot project was originally built using React via CDN, and has now been fully upgraded into a modern setup using **React + Vite**, with a clean component structure, persistent chat history, timestamps, auto-scroll, loading states, and integration with the **SuperSimpleDev Chatbot API**.

## ✨ Features

- Real chat interface  
- Loading indicator  
- Timestamps using dayjs  
- Persistent localStorage history  
- Clear chat button  
- Organized React components  
- Auto-scroll via custom hook  

## 🧩 Project Structure

chatbot-project/
├── node_modules/
├── public/
│   └── vite.svg
├── scripts/
│   └── chatbot.js
├── src/
│   ├── assets/
│   │   ├── profile-1.jpg
│   │   ├── react.svg
│   │   ├── robot.png
│   │   └── user.png
│   ├── components/
│   │   ├── ChatInput.css
│   │   ├── ChatInput.jsx
│   │   ├── ChatMessage.css
│   │   ├── ChatMessage.jsx
│   │   ├── ChatMessages.css
│   │   └── ChatMessages.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── vite.config.js
└── README.md


## ▶️ How to Run

```
npm install
npm run dev
```

Then open: **http://localhost:5173/**
