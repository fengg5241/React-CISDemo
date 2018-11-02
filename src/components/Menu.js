import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"> Trade Booking </Link> |
        <Link to="/aaa"> Other Page </Link>
      </div>
    );
  }
}

export default Menu;
