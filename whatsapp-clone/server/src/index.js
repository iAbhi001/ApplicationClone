const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("DB Connected"));

const registerSocketHandlers = require("./sockets/socketHandler");
io.on("connection", (socket) => registerSocketHandlers(io, socket));

server.listen(process.env.PORT || 5000, () => console.log("Server Active"));