import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const { Chatbot } = window;

    Chatbot.addResponses({
      hello: "Hi there! 👋 How can I help you?",
      bye: "Goodbye! Talk soon 🙂",
      react: "React is awesome! ⚛️",
      pizza: "Pizza sounds delicious right now! 🍕",
      // você pode criar mais:
      jaime: "You’re doing great, keep going! 💪",
      help: () => "Try asking me something! 😄"
    });
  }, []);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}

      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
