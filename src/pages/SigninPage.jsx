// src/pages/SigninPage.jsx

import AuthForm from "../components/AuthForm.jsx";
import { NavLink } from "react-router-dom";
import css from "../styles/SigninPage.module.css";

const SigninPage = () => {
  return (
    <div className={css.signinPageContainer}>
      <AuthForm isRegister={false} />
      <NavLink to="/register" className={css.link}>
        Registration
      </NavLink>
    </div>
  );
};

export default SigninPage;
