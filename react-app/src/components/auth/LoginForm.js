import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";

import "./styles/LoginForm.css";

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
    input.classList.remove("error_border");

    if (!email) {
      setErrors([data[0]]);
      input = document.querySelector(".login_email_input");
      input.classList.add("error_border");
      console.log(errors);
      return;
    } else if (email && !password) {
      console.log("hey");
      setErrors([data[0]]);
      if (password === "") {
        console.log("hey");
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

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
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
    <form className="login_form" onSubmit={onLogin}>
      <div className="login_form_div">
        Log In
        <div className="login_errors">
          {errors.map((error, ind) => (
            <div className="login_error" key={ind}>
              {error.split(":")[1]}
            </div>
          ))}
        </div>
        <div className="login_div">
          <label htmlFor="email" className="login_label">
            <span className="login_email_span">Email:</span>
            <input
              className="login_email_input"
              name="email"
              type="text"
              value={email}
              onChange={updateEmail}
            />
          </label>
        </div>
        <div className="login_div">
          <label htmlFor="password" className="login_label">
            <span className="login_password_span">Password:</span>
            <input
              className="login_password_input"
              name="password"
              type="password"
              value={password}
              onChange={updatePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
          <button onClick={() => history.push("/signup")}>Sign Up</button>
          <button onClick={demoLogin}>Demo Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
