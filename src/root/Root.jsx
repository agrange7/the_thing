import { Header } from "../components/layouts/header/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Header />
      <main className="main-home main-global">
        <Outlet />
      </main>
    </>
  );
};
