// src\components\Header\LogoutBtn.jsx
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";
import Cookies from "../../features/cookies";

export const LogoutBtn = ({ onLogout, onClose }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = Cookies.readCookie();
    try {
      const response = await fetch(
        "https://deploy-marek-b05855e6af89.herokuapp.com/api/v1/users/logout",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to log out: ${errorText}`);
      }

      onLogout();
      onClose();
      Cookies.eraseCookie("token");
      navigate("/SoYummy_FrontEnd_groupNo_1/");
    } catch (error) {
      console.error("Error logging out:", error);
      alert(`An error occurred while logging out: ${error.message}`);
    }
  };

  useEffect(() => {
    const handleBackgroundClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleBackgroundClick);
    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("mousedown", handleBackgroundClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return (
    <div
      className="HeaderLogoutModal HeaderModalColor HeaderModalStyle"
      ref={modalRef}
    >
      <div className="HeaderLogoutModalClose HeaderIconColor" onClick={onClose}>
        <svg>
          <use xlinkHref={`${symbolDefs}#icon-exit`} />
        </svg>
      </div>
      <p className="HeaderLogoutModalQuest">
        Are you sure you want to log out?
      </p>
      <div className="HeaderLogoutModalButtons">
        <button className="HeaderLogoutModalButton" onClick={handleLogout}>
          Log out
        </button>
        <button className="HeaderCancelButton" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

LogoutBtn.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
