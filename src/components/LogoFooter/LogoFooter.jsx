// import React from 'react';
import { Link } from "react-router-dom";
import LogoFooter from "../../images/logo/logo 2.svg";
import { ImgLog } from "./LogoFooter.styled";

export const Logo = () => {
  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to="/SoYummy_Frontend/home" onClick={uppPageHandler}>
      <ImgLog src={LogoFooter} alt="Logo" />
    </Link>
  );
};
