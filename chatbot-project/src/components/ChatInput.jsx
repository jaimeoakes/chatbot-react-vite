import { useState } from 'react';
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages, onClear }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { Chatbot } = window;

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function saveInputDate(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') return;

    setIsLoading(true);

    // 🕒 Hora atual em milissegundos
    const time = dayjs().valueOf();

    // Mensagem do usuário
    const userMessage = {
      message: inputText,
      sender: 'user',
      time: time,
      id: crypto.randomUUID()
    };

    const newChatMessages = [...chatMessages, userMessage];

    // Mensagem de loading
    setChatMessages([
      ...newChatMessages,
      {
        message: 'Loading...',
        sender: 'robot',
        time: time,
        id: crypto.randomUUID()
      }
    ]);

    // ⏳ Delay de 1 segundo
    await wait(1000);

    // Resposta do chatbot
    const response = await Promise.resolve(Chatbot.getResponse(inputText));

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        time: dayjs().valueOf(),
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputDate}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button 
        onClick={sendMessage}
        className="send-button"
        disabled={isLoading}
      >
        Send
      </button>

      <button
        onClick={onClear}
        className="clear-button"
        disabled={chatMessages.length === 0}
      >
        Clear
      </button>
    </div>
  );
}
