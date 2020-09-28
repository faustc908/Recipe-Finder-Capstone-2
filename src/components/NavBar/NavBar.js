import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// NavBar with favicon

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <p className="texta">
          <FontAwesomeIcon className="icon" icon="utensils" />
          GoodEats
        </p>
        <p className="textb">Search for new recipes</p>
      </div>
    );
  }
}

export default NavBar;
