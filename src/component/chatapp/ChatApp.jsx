import { useState } from "react";
import styles from "./chatApp.module.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "User1", text: "Hello!" },
    { id: 2, sender: "User2", text: "Hi there!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: "User1",
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className={styles.chatContainer}>
      <h2>💬 Simple Chat App</h2>

      <div className={styles.chatBox}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === "User1" ? styles.userMessage : styles.otherMessage
            }
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
