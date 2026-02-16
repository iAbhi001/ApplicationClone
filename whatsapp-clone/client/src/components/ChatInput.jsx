import { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 flex items-center">
      <input 
        className="flex-1 p-2 rounded-lg border-none focus:ring-0" 
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="ml-2 bg-green-500 text-white p-2 rounded-full">Send</button>
    </form>
  );
};

export default ChatInput;