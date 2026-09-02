import { useState, useRef, useEffect } from "react";
import styles from "./ChatWidget.module.css";

const API_URL = "http://localhost:8000/chat";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: messages }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      const data = await res.json();
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("Chat request failed:", err);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Sorry, I couldn't reach the server. Try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={styles.globe}
        aria-label="Open chat"
      >
        🌍
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Mwiza's Bot</span>
        <button
          onClick={() => setIsOpen(false)}
          className={styles.closeBtn}
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      <div className={styles.messageList}>
        {messages.length === 0 && (
          <p className={styles.emptyState}>Ask me anything about my career.</p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${styles.bubbleMsg} ${
              msg.role === "user" ? styles.userBubble : styles.assistantBubble
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && <div className={styles.typingIndicator}>Thinking…</div>}
        <div ref={bottomRef} />
      </div>

      <div className={styles.inputRow}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={1}
          className={styles.textarea}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className={styles.sendBtn}
        >
          Send
        </button>
      </div>
    </div>
  );
}
