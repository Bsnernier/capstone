import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

import "../NavBar/NavBar.css";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = async (e) => {
        await dispatch(logout());
        history.push("/library");
        history.push("/");
    };

    return (
        <button id="drop4" className="navbar_modal_link bottom" onClick={onLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
