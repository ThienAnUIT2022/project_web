import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupValidation } from "./signupValidation";
import axios from "axios";
import "./login.css";

function Register() {
  useEffect(() => {
    let eyeicons = document.getElementById("eyeicons");
    let passwords = document.getElementById("passwords");

    eyeicons.onclick = function () {
      if (passwords.type === "password") {
        passwords.type = "text";
      } else {
        passwords.type = "password";
      }
    };
  }, []);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(signupValidation(values));
    if (
      errors.firstName === "" &&
      errors.lastName === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("https://vn-backpacking.onrender.com:3306/register", values)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Loginpage">
      <div className="body-Login">
        <header>
          <button type="submit" className="head-button">
            <a href="/">Home</a>
          </button>
        </header>
        <div className="wrapper-register ">
          <form action="" id="form-register" onSubmit={handleSubmit}>
            <h1> Sign Up </h1>
            <div className="two-form">
              <div className="input-box">
                <input
                  type="text"
                  required
                  name="firstName"
                  onChange={handleInput}
                />
                {errors.firstName && (
                  <span className="text-danger">{errors.firstName}</span>
                )}
                <i className="bx bxs-user"></i>
                <label>First Name</label>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  required
                  name="lastName"
                  onChange={handleInput}
                />
                {errors.lastName && (
                  <span className="text-danger">{errors.lastName}</span>
                )}
                <i className="bx bxs-user"></i>
                <label>Last Name</label>
              </div>
            </div>
            <div className="input-box">
              <input type="text" required name="email" onChange={handleInput} />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
              <i class="bi bi-envelope-fill"></i>
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="passwords"
                required
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              <i class="bi bi-eye-fill" id="eyeicons"></i>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="??">Terms & Conditions</a>
            </div>
            <button className="submit" type="submit">
              Register
            </button>
            <div className="login-link">
              <p>
                {" "}
                Have an account?{" "}
                <a href="/login" className="login-links">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;