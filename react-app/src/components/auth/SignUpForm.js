import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login, signUp } from "../../store/session";

import "./styles/AuthForm.css";
import logo from "../../resources/gg_large_rings.gif";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (password !== repeatPassword) {
      setErrors(["Passwords do not match"]);
      return;
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth_container">
      <img className="auth_logo" src={logo} alt="logo should be here" />
      <div className="splash_summary">
        Gamer Gazer is an app for video game hobbyists to review games and keep
        track of their games from different platforms. The User can leave a
        review for others to use or add games to their library and keep track of
        completion status.
      </div>
      <form className="auth_form" onSubmit={onSignUp}>
        <div className="auth_form_div">
          Sign Up
          <div className="auth_errors">
            {errors.map((error, ind) => (
              <div className="auth_error" key={ind}>
                {error.includes(":") ? error.split(":")[1] : error}
              </div>
            ))}
          </div>
          <div className="auth_div">
            <label className="auth_label">
              <span className="auth_span">Username:</span>
              <input
                className="auth_input"
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
                required={true}
              />
            </label>
          </div>
          <div className="auth_div">
            <label className="auth_label">
              <span className="auth_span">Email:</span>
              <input
                className="auth_input"
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
                required={true}
              />
            </label>
          </div>
          <div className="auth_div">
            <label className="auth_label">
              <span className="auth_span">Password:</span>
              <input
                className="auth_input"
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
                required={true}
              />
            </label>
          </div>
          <div className="auth_div">
            <label className="auth_label">
              <span className="auth_span">Repeat Password:</span>
              <input
                className="auth_input"
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              />
            </label>
          </div>
          <button className="auth_button auth_submit" type="submit">
            Sign Up
          </button>
          <div className="auth_button_div">
            <button
              className="auth_button"
              onClick={() => history.push("/login")}
            >
              Log In
            </button>
            <button className="auth_button" onClick={demoLogin}>
              Demo Login
            </button>
          </div>
        </div>
      </form>
      <div className="splash_links">
        <a
          href="https://github.com/Bsnernier/capstone"
          class="fab fa-github-square icon"
          target="_blank"
        ></a>
        <a
          href="https://www.linkedin.com/in/nathaniel-bernier-899110207"
          class="fab fa-linkedin icon"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default SignUpForm;
