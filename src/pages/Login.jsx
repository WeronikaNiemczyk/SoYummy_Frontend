// src/pages/Login.jsx

// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className={styles.buttons}>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button>Login</button>
      </div>
      <Link to="/">
        <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
      </Link>
    </div>
  );
};

export default Login;
