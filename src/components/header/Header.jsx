import "./Header.css" 
import { useState } from "react"

export const Header = () => {
  const [menuDeploy, setMenuDeploy] = useState(false);
  const menuToggle = () => setMenuDeploy (!menuDeploy);
    return(
        <header className="header">
        <nav className="nav-container">
          <a href="./">
            <h1>The Thing</h1>
          </a>
          <svg onClick={menuToggle}
            className="nav-menu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
          <ul className={`nav-ul ${menuDeploy ? "nav-ul--open" : ""}`}>
            <li className="nav-li nav-active">
              <a href="#">Home</a>
            </li>
            <li className="nav-li"><a href="./pages/films.html">Films</a></li>
            <li className="nav-li"><a href="./pages/directors.html">Directors</a></li>
            <li className="nav-li"><a href="./pages/lists.html">Lists</a></li>
            <li className="nav-li"><a href="./pages/analysis.html">Analysis</a></li>
            <li className="nav-li">
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </li>
            <li className="nav-li">
              <a className="sign-up-button" href="./pages/signup.html">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}