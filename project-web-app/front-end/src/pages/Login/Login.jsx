import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { validation } from "./loginValidation"; 
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext
import axios from "axios";
import "./login.css";
import "./loginValidation";

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

  const { setIsLoggedIn } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setErrors(validation(values));
    //if (errors.email === "" && errors.password === "") {
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data === "Success") {
          setIsLoggedIn(true);
          navigate("/");
        } else {
          alert("No record existed");
        }
      })
      .catch((err) => console.log(err));
    //}
  };

  return (
    <div className="Loginpage">
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
