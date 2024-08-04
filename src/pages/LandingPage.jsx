// // src/pages/LandingPage.jsx

// import { Link } from "react-router-dom";
// import styles from "./LandingPage.module.css";

// const LandingPage = () => {
//   return (
//     <div className={styles.landingPage}>
//       <h1>Welcome to SoYummy</h1>
//       <Link to="/register">
//         <button>Register</button>
//       </Link>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//       <Link to="/">
//         <button className={styles.devSkip}>Dev - Skip and go further</button>
//       </Link>
//     </div>
//   );
// };

// export default LandingPage;

// src/pages/LandingPage.jsx

import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <h1>Welcome to SoYummy</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/home">
        <button className={styles.devSkip}>Dev - Skip and go further</button>
      </Link>
    </div>
  );
};

export default LandingPage;
