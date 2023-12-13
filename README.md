# ChessVista Online Chess Game

ChessVista is an online chess game application where players can play live chess games with each other. The game supports creating and joining rooms, allowing players to play against each other in real-time.

## Features

- Create a game room and receive a unique Room ID.
- Join an existing game room using the Room ID.
- Play live chess with your opponent in the same room.
- Real-time synchronization of moves across players.

## Technologies Used

- **Frontend:**
  - React
  - React-Chessboard for rendering the chessboard
  - Socket.IO for real-time communication

- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO for handling WebSocket connections
  - Chess.js for chess game logic

## Setup

### Prerequisites

- Node.js and npm installed
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository (if you haven't done so already):

    ```bash
    git clone https://github.com/your-username/chess-vista.git
    ```

2. Navigate to the project directory:

    ```bash
    cd chess-vista
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

### Running the Application

1. Start the backend server:

    ```bash
    cd backend
    node server.js
    ```

    Or, if you have Nodemon installed:

    ```bash
    nodemon server.js
    ```

    The server will run at http://localhost:3001.

2. Start the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

    Open your browser and go to http://localhost:3000.

## Usage

1. Open the application in your browser.
2. Click on "Create Game" to start a new game and get a Room ID.
3. Share the Room ID with your opponent.
4. Your opponent clicks on "Join Game" and enters the Room ID.
5. Play chess in real-time with your opponent.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the [MIT License](LICENSE).
