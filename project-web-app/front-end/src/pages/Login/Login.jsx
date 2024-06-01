import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "./loginValidation";
import { validation } from "./loginValidation";
import axios from "axios";

function Login() {
  //Show/Hide password
  useEffect(() => {
    let eyeicon = document.getElementById("eyeicon");
    let password = document.getElementById("password");

    eyeicon.onclick = function () {
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    };
  }, []);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    //if (errors.email === "" && errors.password === "") {
    axios
      .post("https://vn-backpacking.onrender.com/login", values)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
        } else {
          alert("No record existed");
        }
      })
      .catch((err) => console.log(err));
    //}
  };

  return (
    <div>
      <div className="body-Login">
        <header>
          <button type="submit" className="head-button">
            <a href="/">Home</a>
          </button>
        </header>
        <div className="wrapper-login ">
          <form action="" id="form-login" onSubmit={handleSubmit}>
            <h1 className="form-heading">LOGIN</h1>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                name="email"
                required
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
              <i className="bx bxs-user"></i>
              <label>Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                id="password"
                name="password"
                required
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              <i className="bx bxs-lock-alt" id="eyeicon"></i>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                {" "}
                <input type="checkbox" />
                Remember me
              </label>
              <a href="link"> Forgot password?</a>
            </div>
            <button type="submit" className="form-submit">
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account{" "}
                <a href="/register" className="register-links">
                  {" "}
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
