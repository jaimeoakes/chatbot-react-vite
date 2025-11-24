import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  // 5j – carregar mensagens salvas do localStorage
  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem('messages');
    return saved ? JSON.parse(saved) : [];
  });

  // 5h – registrar respostas do Chatbot (uma vez só)
  useEffect(() => {
    const { Chatbot } = window;

    Chatbot.addResponses({
      hello: 'Hi there! 👋 How can I help you?',
      bye: 'Goodbye! Talk soon 🙂',
      react: 'React is awesome! ⚛️',
      pizza: 'Pizza sounds delicious right now! 🍕',
      jaime: 'You’re doing great, keep going! 💪',
      help: () => 'Try asking me something! 😄'
    });
  }, []);

  // 5j – salvar mensagens no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // 5k – limpar mensagens + localStorage
  function handleClearMessages() {
    setChatMessages([]);
    localStorage.setItem('messages', JSON.stringify([]));
  }

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
        onClear={handleClearMessages} // 👈 passa a função pro input
      />
    </div>
  );
}

export default App;
