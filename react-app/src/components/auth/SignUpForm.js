import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login, signUp } from "../../store/session";

import "./styles/AuthForm.css";

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
    <form className="auth_form" onSubmit={onSignUp}>
      <div className="auth_form_div">
        Sign Up
        <div className="auth_errors">
          {errors.map((error, ind) => (
            <div className="auth_error" key={ind}>
              {error}
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
        <div>
          <button type="submit">Sign Up</button>
          <button onClick={() => history.push("/login")}>Log In</button>
          <button onClick={demoLogin}>Demo Login</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
