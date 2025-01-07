import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Analysis } from "./components/pages/analysis/Analysis";
import { Directors } from "./components/pages/directors/Directors";
import { Films } from "./components/pages/films/Films/Films";
import { Home } from "./components/pages/home/Home";
import { Lists } from "./components/pages/lists/Lists";
import { SignUp } from "./components/pages/signup/SignUp ";
import { Root } from "./root/root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>404 not found</div>,
      children: [
        {
          index: true,
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
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
