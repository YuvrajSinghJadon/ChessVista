const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Pass the server to socket.io

const activeGames = new Map();

io.on("connection", (socket) => {
  console.log("A user connected");

  // Create a new game room
  socket.on("createGame", (roomId) => {
    socket.join(roomId);
    activeGames.set(roomId, { players: [socket.id], game: new Chess() });
    io.to(roomId).emit("gameState", activeGames.get(roomId).game.fen());
  });

  // Join an existing game room
  socket.on("joinGame", (roomId) => {
    const game = activeGames.get(roomId);
    if (game && game.players.length < 2) {
      socket.join(roomId);
      game.players.push(socket.id);
      io.to(roomId).emit("gameState", game.game.fen());
    } else {
      // Handle the case where the room is full or does not exist
    }
  });

  // Handle moves
  socket.on("move", ({ roomId, move }) => {
    const game = activeGames.get(roomId);
    if (game) {
      game.game.move(move);
      io.to(roomId).emit("gameState", game.game.fen());
    }
  });

  // Handle disconnect event if needed
  socket.on("disconnect", () => {
    console.log("User disconnected");
    // Handle disconnect logic, remove the player from the game room, etc.
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
