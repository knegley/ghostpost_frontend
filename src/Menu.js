import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink to="">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/boasts/">Boasts</NavLink>
        </li>
        <li>
          <NavLink to="/roats">Roasts</NavLink>
        </li>
        <li>
          <NavLink to="popular-posts">Popular Posts</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Menu;
