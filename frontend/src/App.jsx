// App.jsx
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ChessGame from "./components/ChessGame.jsx";

function App({ socket }) {
  return (
    <main className="w-screen min-h-screen bg-primary flex flex-col">
      <div>
        <Navbar />
        <Hero />
        <ChessGame socket={socket} />
      </div>
    </main>
  );
}

export default App;
