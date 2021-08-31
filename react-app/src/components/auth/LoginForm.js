import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";

import "./styles/AuthForm.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    let input = document.querySelector(".login_email_input");
    if (input) {
      input.classList.remove("error_border");
    }

    if (!email) {
      setErrors([data[0]]);
      input = document.querySelector(".login_email_input");
      input.classList.add("error_border");
      return;
    } else if (email && !password) {
      setErrors([data[0]]);
      if (password === "") {
        input = document.querySelector(".login_password_input");
        input.classList.add("error_border");
        return;
      }
    } else if (!email && password === "") {
      setErrors(["Please enter your credentials"]);
      input = document.querySelector(".login_email_input");
      input.classList.add("error_border");
      input = document.querySelector(".login_password_input");
      input.classList.add("error_border");
      return;
    }
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form className="auth_form" onSubmit={onLogin}>
      <div className="auth_form_div">
        Log In
        <div className="auth_errors">
          {errors.map((error, ind) => (
            <div className="auth_error" key={ind}>
              {error.split(":")[1]}
            </div>
          ))}
        </div>
        <div className="auth_div">
          <label htmlFor="email" className="auth_label">
            <span className="auth_span">Email:</span>
            <input
              className="auth_input login_email_input"
              name="email"
              type="text"
              value={email}
              onChange={updateEmail}
            />
          </label>
        </div>
        <div className="auth_div">
          <label htmlFor="password" className="auth_label">
            <span className="auth_span">Password:</span>
            <input
              className="auth_input login_password_input"
              name="password"
              type="password"
              value={password}
              onChange={updatePassword}
            />
          </label>
        </div>
        <button className="auth_submit auth_button" type="submit">
          Login
        </button>
        <div className="auth_button_div">
          <button
            className="auth_button"
            onClick={() => history.push("/sign-up")}
          >
            Sign Up
          </button>
          <button className="auth_button" onClick={demoLogin}>
            Demo Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
