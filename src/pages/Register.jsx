// src/pages/Register.jsx

// import React from 'react';

// import { Link } from "react-router-dom";
// import styles from "./Register.module.css";

// const Register = () => {
//   return (
//     <div className={styles.registerPage}>
//       <h1>Register</h1>
//       <input type="text" placeholder="Name" />
//       <input type="email" placeholder="Email" />
//       <input type="password" placeholder="Password" />
//       <div className={styles.buttons}>
//         <Link to="/">
//           <button>Cancel</button>
//         </Link>
//         <button>Register</button>
//       </div>
//       <Link to="/">
//         <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
//       </Link>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Signup from "../components/SignupUser";
// import styles from "./Register.module.css";

// const Register = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [name, setName] = useState();
//   const [submitted, setSubmitted] = useState(false);

//   const submit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className={styles.registerPage}>
//       <form onSubmit={submit}>
//         <h1>Register</h1>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <div className={styles.buttons}>
//           <Link to="/">
//             <button>Cancel</button>
//           </Link>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//       {submitted && <Signup signupData={{ name, email, password }} />}
//       <Link to="../SoYummy_FrontEnd_groupNo_1/home">
//         <button className={styles.devSkip}>Dev - Skip ahead</button>
//       </Link>
//     </div>
//   );
// };

// export default Register;

// src/pages/Register.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../components/SignupUser";
import symbolDefs from "../images/symbol-defs.svg";
import styles from "./Register.module.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className={styles.registerPage}>
      <form onSubmit={submit} className={styles.authForm}>
        <h1>Register</h1>
        <div className={styles.inputGroup}>
          <svg className={styles.icon}>
            <use href={`${symbolDefs}#icon-user`} />
          </svg>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <svg className={styles.icon}>
            <use href={`${symbolDefs}#icon-mail`} />
          </svg>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <svg className={styles.icon}>
            <use href={`${symbolDefs}#icon-password`} />
          </svg>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </div>
      </form>
      {submitted && <Signup signupData={{ name, email, password }} />}
      <Link to="../SoYummy_FrontEnd_groupNo_1/home">
        <button className={styles.devSkip}>Dev - Skip ahead</button>
      </Link>
    </div>
  );
};
export default Register;
