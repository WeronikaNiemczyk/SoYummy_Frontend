import AuthNav from "../components/AuthNav.jsx";
import css from "../styles/WelcomePage.module.css";

// import symbolDefs from "../../images/symbol-defs.svg";

const WelcomePage = () => {
  return (
    <div className={css.welcomeContainer}>
      {/* <svg>
        <use xlinkHref={`${symbolDefs}#icon-logo`} />
      </svg> */}
      <h1 className={css.welcomeTitle}>Welcome to the app!</h1>
      <p className={css.welcomeSubtitle}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time..
      </p>
      <AuthNav />
    </div>
  );
};

export default WelcomePage;
