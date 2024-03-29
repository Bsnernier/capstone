import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";

import logo from "../../resources/gg_large_rings.gif";
import "./NavBar.css";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector((state) => state.session.user);
    const history = useHistory();

    let logButton = null;
    let dropdownMenu = null;

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                e.target.id === "profile_dropdown" ||
                e.target.id === "drop1" ||
                e.target.id === "drop2" ||
                e.target.id === "drop3" ||
                e.target.id === "drop4" ||
                e.target.id === "drop5"
            ) {
                return;
            } else {
                if (isMenuOpen) {
                    setIsMenuOpen(false);
                    if (document.querySelector(".profile_dropdown_guest")) {
                        document.querySelector(".profile_dropdown_guest").classList.remove("active");
                    } else {
                        document.querySelector(".profile_dropdown_user").classList.remove("active");
                    }
                }
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isMenuOpen]);

    function toggleMenu() {
        let dropdownToToggle = null;

        if (switchDropdownOptions()) {
            dropdownToToggle = document.querySelector(".profile_dropdown_user");
        } else {
            dropdownToToggle = document.querySelector(".profile_dropdown_guest");
        }

        if (isMenuOpen) {
            switchDropdownOptions();
            setIsMenuOpen(false);
            dropdownToToggle.classList.toggle("active");
        } else {
            switchDropdownOptions();
            setIsMenuOpen(true);
            dropdownToToggle.classList.toggle("active");
        }

        showButton();
    }

    const showButton = () => {
        if (user?.id) {
            logButton = (
                <button id="drop1" className="navbar_profile" onClick={toggleMenu}>
                    {user.username}
                </button>
            );
            dropdownMenu = (
                <div className="profile_dropdown_user">
                    <button
                        id="drop3"
                        className="navbar_modal_link top"
                        onClick={() => history.push("/library")}
                    >
                        Library
                    </button>
                    <LogoutButton />
                </div>
            );
        } else if (!user?.id) {
            logButton = (
                <button id="drop2" className="navbar_profile" onClick={toggleMenu}>
                    Log In / Sign Up
                </button>
            );
            dropdownMenu = (
                <div className="profile_dropdown_guest">
                    <NavLink
                        id="drop4"
                        to="/login"
                        exact={true}
                        activeClassName="active"
                        className="navbar_modal_link guest_modal_link top"
                    >
                        Log In
                    </NavLink>
                    <NavLink
                        id="drop5"
                        to="/sign-up"
                        exact={true}
                        activeClassName="active"
                        className="navbar_modal_link guest_modal_link bottom"
                    >
                        Sign Up
                    </NavLink>
                </div>
            );
        }
    };

    const switchDropdownOptions = () => {
        if (user?.id) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar_div">
                <ul className="navbar_ul">
                    <NavLink to="/" exact={true} activeClassName="active" className="navbar_home">
                        <img className="navbar_logo" src={logo} alt="logo should be here" />
                    </NavLink>
                    {showButton()}
                    {logButton}
                </ul>
            </div>
            {dropdownMenu}
        </nav>
    );
};

export default NavBar;
