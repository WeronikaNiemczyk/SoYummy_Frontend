// src\components\Header\LogoutBtn.jsx
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const LogoutBtn = ({ onLogout, onClose }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/users/logout`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to log out");
        }
        onLogout();
        onClose();
        localStorage.removeItem("authToken");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        alert("An error occurred while logging out. Please try again.");
      });
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
