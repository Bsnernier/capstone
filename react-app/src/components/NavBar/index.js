import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import logo from "../../resources/gg_logo_gif.gif";

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
        <button className="navbar_login">
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            className="navbar_login_nav"
          >
            Log In
          </NavLink>
        </button>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar_div">
        <ul className="navbar_ul">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            className="navbar_home"
          >
            <img className="navbar_logo" src={logo} />
          </NavLink>
          {showButton()}
          {logButton}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
