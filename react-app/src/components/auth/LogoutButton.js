import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";

import "../NavBar/NavBar.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div className="auth_logout navbar_login">
      <span className="auth_logout_username">{user.username}</span>
      <button className="navbar_login" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
