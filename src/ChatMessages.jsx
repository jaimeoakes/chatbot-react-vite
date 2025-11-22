import ChatMessage from "./ChatMessage.jsx";
import useAutoScroll from "./hooks/useAutoScroll.js";

export default function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
    </div>
  );
}
