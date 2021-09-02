import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

import "../NavBar/NavBar.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/library");
    history.push("/");
  };

  return (
    <button className="navbar_modal_link" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
