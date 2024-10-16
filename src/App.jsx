import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/layouts/header/Header";
import { Analysis } from "./components/pages/analysis/Analysis";
import { Directors } from "./components/pages/directors/Directors";
import { Films } from "./components/pages/films/Films/Films";
import { Home } from "./components/pages/home/Home";
import { Lists } from "./components/pages/lists/Lists";
import { SignUp } from "./components/pages/signUp/SignUp";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/lists",
    element: <Lists />,
  },
  {
    path: "/analysis",
    element: <Analysis />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router}>
        <main className="main-home main-global"></main>
      </RouterProvider>
    </>
  );
}

export default App;
