// src/pages/Register.jsx

// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.registerPage}>
      <h1>Register</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className={styles.buttons}>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button>Register</button>
      </div>
      <Link to="/">
        <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
      </Link>
    </div>
  );
};

export default Register;
