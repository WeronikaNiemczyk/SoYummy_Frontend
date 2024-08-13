// src/components/AuthForm.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../styles/AuthForm.module.css";

const AuthForm = ({ isRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (isRegister && password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          isRegister ? "/api/register" : "/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        e;
        localStorage.setItem("token", data.token);

        navigate("/SoYummy_groupNo_1/main");
      } catch (err) {
        setErrors({ form: err.message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.authForm}>
      <h2>{isRegister ? "Register" : "Sign In"}</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={css.error}>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={css.error}>{errors.password}</p>}
      </div>
      {isRegister && (
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className={css.error}>{errors.confirmPassword}</p>
          )}
        </div>
      )}
      <button type="submit">{isRegister ? "Sign Up" : "Sign In"}</button>
      <p>
        {isRegister ? (
          <>
            Already have an account?{" "}
            <a href="/SoYummy_groupNo_1/signin">Sign In</a>
          </>
        ) : (
          <>
            No account? <a href="/SoYummy_groupNo_1/register">Register</a>
          </>
        )}
      </p>
      {errors.form && <p className={css.error}>{errors.form}</p>}
    </form>
  );
};

AuthForm.propTypes = {
  isRegister: PropTypes.bool.isRequired,
};

export default AuthForm;
