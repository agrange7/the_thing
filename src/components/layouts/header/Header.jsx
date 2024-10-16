import { Navegation } from "../navegation/Navegation";
import "./Header.css";

export const Header = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Films", url: "/films" },
    { title: "Directors", url: "/directors" },
    { title: "Lists", url: "/lists" },
    { title: "Analysis", url: "/analysis" },
  ];

  return (
    <header className="header">
      <Navegation links={links} />
    </header>
  );
};
