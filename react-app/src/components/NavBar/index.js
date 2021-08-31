import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  let logButton = null;

  const showButton = () => {
    if (user?.id) {
      logButton = <LogoutButton />;
    } else if (!user?.id) {
      logButton = (
        <NavLink
          to="/login"
          exact={true}
          activeClassName="active"
          className="navbar_li"
        >
          Login
        </NavLink>
      );
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar_ul">
        <NavLink
          to="/"
          exact={true}
          activeClassName="active"
          className="navbar_li"
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          exact={true}
          activeClassName="active"
          className="navbar_li"
        >
          Login
        </NavLink>
        <NavLink
          to="/sign-up"
          exact={true}
          activeClassName="active"
          className="navbar_li"
        >
          Sign Up
        </NavLink>
        {showButton()}
        {logButton}
      </ul>
    </nav>
  );
};

export default NavBar;
