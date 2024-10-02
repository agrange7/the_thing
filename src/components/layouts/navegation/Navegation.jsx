import PropTypes from "prop-types";
import { useState } from "react";
import "./Navegation.css";
import { DropDownMenuIcon } from "../../Icon/dropDownMenuIcon";

export const Navegation = ({ links }) => {
  const [menuDeploy, setMenuDeploy] = useState(false);
  const menuToggle = () => setMenuDeploy(!menuDeploy);

  return (
    <nav className="nav-container">
      <a href="./">
        <h1>The Thing</h1>
      </a>
      <DropDownMenuIcon onClick={menuToggle} />
      <ul className={`nav-ul ${menuDeploy ? "nav-ul--open" : ""}`}>
        {links.map(({ title, url }, index) => {
          return (
            <li key={index} className="nav-li">
              <a href={url}>{title}</a>
            </li>
          );
        })}
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <li className="nav-li">
          <a className="sign-up-button" href="./pages/signup.html">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};
Navegation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
