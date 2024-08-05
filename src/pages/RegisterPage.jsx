// src/pages/RegisterPage.jsx

import AuthForm from "../components//AuthForm.jsx";
import { NavLink } from "react-router-dom";
import css from "../styles/RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.registerPageContainer}>
      <AuthForm isRegister={true} />
      <NavLink to="/signin" className={css.link}>
        Sign in
      </NavLink>
    </div>
  );
};

export default RegisterPage;
