import "./App.css";
import { Header } from "./components/layouts/header/Header";
import { Home } from "./components/pages/home/Home";
import { FilmCard } from "./components/FilmCard";

function App() {
  return (
    <>
      <Header />
      <main className="main-home main-global">
        <Home />
      </main>
    </>
  );
}

export default App;
