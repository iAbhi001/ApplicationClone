# WhatsApp Clone - Web Application

A full-stack, real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for instant communication.

## 🚀 Features
- **Real-time Messaging:** Instant message delivery using WebSockets.
- **User Authentication:** Secure login and registration with JWT.
- **Presence System:** Real-time online/offline status and "last seen" indicators.
- **Modern UI:** Clean, responsive interface built with Tailwind CSS.
- **State Management:** Efficient global state handling using Zustand.

---

## 📂 Project Structure

```text
whatsapp-clone/
├── 📁 client/ (Frontend - React/Next.js)
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📄 Sidebar.jsx        # Search bar + Chat list
│   │   │   ├── 📄 ChatWindow.jsx     # Message feed + Header
│   │   │   ├── 📄 MessageBubble.jsx  # Individual text bubbles
│   │   │   └── 📄 ChatInput.jsx      # Text area + Emoji picker
│   │   ├── 📁 store/
│   │   │   └── 📄 useChatStore.js    # Zustand: activeChat, messages
│   │   ├── 📁 hooks/
│   │   │   └── 📄 useSocket.js       # Logic to connect/disconnect socket
│   │   ├── 📁 utils/
│   │   │   └── 📄 formatTime.js      # Converts timestamps to "10:30 AM"
│   │   ├── 📄 App.js                 # Main Layout
│   │   └── 📄 index.css              # Tailwind & Global styles
│   └── 📄 package.json
│
├── 📁 server/ (Backend - Node.js/Express)
│   ├── 📁 src/
│   │   ├── 📁 models/
│   │   │   ├── 📄 User.js            # Mongoose Schema: Name, Phone, Avatar
│   │   │   └── 📄 Message.js         # Mongoose Schema: Sender, Content, Type
│   │   ├── 📁 controllers/
│   │   │   ├── 📄 authController.js   # Login/Signup logic
│   │   │   └── 📄 messageController.js# Fetching chat history
│   │   ├── 📁 routes/
│   │   │   ├── 📄 authRoutes.js      # /api/auth
│   │   │   └── 📄 messageRoutes.js   # /api/messages
│   │   ├── 📁 sockets/
│   │   │   └── 📄 socketHandler.js   # Socket.io: Join room, Send message
│   │   └── 📄 index.js               # Entry point (App setup)
│   ├── 📄 .env                       # DB_URL, JWT_SECRET, PORT
│   └── 📄 package.json