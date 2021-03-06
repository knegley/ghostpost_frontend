import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => (
  <React.Fragment>
    <ul>
      <li>
        <NavLink to="">Messages</NavLink>
      </li>
      <li>
        <NavLink to="/boast/">Boasts</NavLink>
      </li>
      <li>
        <NavLink to="/roast/">Roasts</NavLink>
      </li>
      <li>
        <NavLink to="/top/">Popular Posts</NavLink>
      </li>
    </ul>
  </React.Fragment>
);

export default Menu;
