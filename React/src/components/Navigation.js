import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

const Navigation = ({ toggleDark }) => {
  return (
    <nav>
      <ul>
        {/* <li>
          <div onClick={toggleDark} className="toggle-cover">
            <div></div>
          </div>
        </li> */}
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faAdjust} color={"green"} size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faClock} color={"green"} size="2x" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
