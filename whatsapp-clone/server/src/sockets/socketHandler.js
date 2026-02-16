const userSockets = new Map(); // userId -> socketId

module.exports = (io, socket) => {
  socket.on("setup", (userId) => {
    socket.join(userId);
    userSockets.set(userId, socket.id);
    console.log(`User ${userId} connected`);
  });

  socket.on("send_message", (newMessage) => {
    const { receiverId } = newMessage;
    // Emit to receiver's private room
    socket.to(receiverId).emit("message_received", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
};