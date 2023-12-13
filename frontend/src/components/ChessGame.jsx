// ChessGame.jsx
import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";

const ChessGame = ({ socket }) => {
  const [game, setGame] = useState(null);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    // Listen for the initial game state when joining a room
    socket.on("gameState", (fen) => {
      setGame({ fen });
    });

    // Handle errors when joining a game
    socket.on("joinError", (error) => {
      alert(`Join Error: ${error}`);
    });

    return () => {
      // Clean up event listeners on component unmount
      socket.off("gameState");
      socket.off("joinError");
    };
  }, [socket]);

  const handleCreateGame = () => {
    const newRoomId = generateRoomId();
    setRoomId(newRoomId);
    socket.emit("createGame", newRoomId);
  };

  const handleJoinGame = () => {
    const roomId = prompt("Enter the room ID:");
    if (roomId) {
      setRoomId(roomId);
      socket.emit("joinGame", roomId);
    }
  };

  const handleMove = (move) => {
    socket.emit("move", { roomId, move });
  };

  const generateRoomId = () => {
    return Math.random().toString(36).substr(2, 6);
  };

  return (
    <div>
      <div>
        <button onClick={handleCreateGame}>Create Game</button>
        <button onClick={handleJoinGame}>Join Game</button>
      </div>
      {roomId && (
        <div className="flex gap-10 justify-center">
          <h2>Room ID: {roomId}</h2>
          <Chessboard
            boardWidth={520}
            position={game?.fen}
            onPieceDrop={(from, to) => handleMove({ from, to, promotion: "q" })}
          />
        </div>
      )}
    </div>
  );
};

export default ChessGame;
