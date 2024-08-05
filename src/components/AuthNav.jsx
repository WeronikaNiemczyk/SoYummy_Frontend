// src/components/AuthNav/AuthNav.jsx

import { Link } from "react-router-dom";
import css from "../styles/AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <Link to="/SoYummy_groupNo_1/register" className={css.navLink}>
        Register
      </Link>
      <Link to="/SoYummy_groupNo_1/signin" className={css.navLink}>
        Sign In
      </Link>
    </nav>
  );
};

export default AuthNav;
