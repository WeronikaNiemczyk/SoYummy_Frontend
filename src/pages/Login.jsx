// src/pages/Login.jsx

// import React from 'react';

// import { Link } from "react-router-dom";
// import styles from "./Login.module.css";

// const Login = () => {
//   return (
//     <div className={styles.loginPage}>
//       <h1>Login</h1>
//       <input type="email" placeholder="Email" />
//       <input type="password" placeholder="Password" />
//       <div className={styles.buttons}>
//         <Link to="/">
//           <button>Cancel</button>
//         </Link>
//         <button>Login</button>
//       </div>
//       <Link to="/">
//         <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
//       </Link>
//     </div>
//   );
// };

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginUser from "../components/LoginUser";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Możesz tutaj dodać nawigację po udanym logowaniu, np.:
    if (email && password) {
      navigate("../SoYummy_FrontEnd_groupNo_1/home");
    }
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={submit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.buttons}>
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button type="submit">Login</button>
        </div>
      </form>
      {submitted && <LoginUser loginUserData={{ email, password }} />}
      <Link to="../SoYummy_FrontEnd_groupNo_1/home">
        <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
      </Link>
    </div>
  );
};

export default Login;
