import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import logo from "../../resources/gg_large_rings.gif";
import "./NavBar.css";

const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logModalIsOpen, setLogModalIsOpen] = useState(false);

  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  let logButton = null;

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
        <button className="navbar_profile" onClick={modalIsOpen ? closeProfileModal : openProfileModal}>
          {user.username}
        </button>
      );
    } else if (!user?.id) {
      logButton = (
        <button className="navbar_profile" onClick={logModalIsOpen ? closeLogModal : openLogModal}>
          Log In / Sign Up
        </button>
      );
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeProfileModal}
        className="navbar-modal"
        overlayClassName="navbar-modal__overlay"
        parentSelector={() => document.querySelector(".navbar_profile")}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <button className="navbar_modal_link" onClick={() => history.push("/library")}>
          Library
        </button>
        <LogoutButton />
      </Modal>
      <Modal
        isOpen={logModalIsOpen}
        onRequestClose={closeLogModal}
        className="navbar-log-modal"
        overlayClassName="navbar-log-modal__overlay"
        parentSelector={() => document.querySelector(".navbar_profile")}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <NavLink to="/login" exact={true} activeClassName="active" className="navbar_modal_link">
          Log In
        </NavLink>
        <NavLink to="/sign-up" exact={true} activeClassName="active" className="navbar_modal_link">
          Sign Up
        </NavLink>
      </Modal>
    </nav>
  );
};

export default NavBar;
