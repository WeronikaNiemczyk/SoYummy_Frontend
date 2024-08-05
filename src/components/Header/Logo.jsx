// src\components\Header\Logo.jsx
import { Link } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="HeaderStyledLogo">
        <svg>
          <use xlinkHref={`${symbolDefs}#icon-logo`} />
        </svg>
      </div>
    </Link>
  );
};
