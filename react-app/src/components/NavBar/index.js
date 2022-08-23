import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import logo from "../../resources/gg_large_rings.gif";
import "./NavBar.css";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        let menuToToggle = null;
        if (switchDropdownOptions) {
            menuToToggle = document.querySelector(".profile_dropdown_guest");
        } else {
            menuToToggle = document.querySelector(".profile_dropdown_user");
        }

        if (isMenuOpen) {
            switchDropdownOptions();
            setIsMenuOpen(false);
            menuToToggle.classList.toggle("active");
        } else {
            switchDropdownOptions();
            setIsMenuOpen(true);
            menuToToggle.classList.toggle("active");
        }
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                e.target.id === "profile_dropdown" ||
                e.target.id === "drop1" ||
                e.target.id === "drop2" ||
                e.target.id === "drop3" ||
                e.target.id === "drop4"
            ) {
                return;
            } else {
                setIsMenuOpen(false);
                document.querySelector(".profile_dropdown").classList.remove("active");
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isMenuOpen]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [logModalIsOpen, setLogModalIsOpen] = useState(false);

    const user = useSelector((state) => state.session.user);
    const history = useHistory();

    let logButton = null;
    let dropdownMenu = null;

    function openProfileModal() {
        setModalIsOpen(true);
    }

    function closeProfileModal() {
        setModalIsOpen(false);
    }

    function openLogModal() {
        setLogModalIsOpen(true);
    }

    function closeLogModal() {
        setLogModalIsOpen(false);
    }

    const showButton = () => {
        if (user?.id) {
            logButton = (
                <button id="drop1" className="navbar_profile" onClick={toggleMenu}>
                    {user.username}
                </button>
            );
        } else if (!user?.id) {
            logButton = (
                <button id="drop2" className="navbar_profile" onClick={toggleMenu}>
                    Log In / Sign Up
                </button>
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
            <div className="profile_dropdown_user">
                <button id="drop3" className="navbar_modal_link" onClick={() => history.push("/library")}>
                    Library
                </button>
                <LogoutButton />
            </div>
            <div className="profile_dropdown_guest">
                <NavLink to="/login" exact={true} activeClassName="active" className="navbar_modal_link">
                    Log In
                </NavLink>
                <NavLink to="/sign-up" exact={true} activeClassName="active" className="navbar_modal_link">
                    Sign Up
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
