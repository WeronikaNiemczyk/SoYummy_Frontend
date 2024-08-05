// src\components\Header\UserInfoModal.jsx
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const UserInfoModal = ({ onClose }) => {
  const [userData, setUserData] = useState({ avatar: "", name: "" });
  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.REACT_APP_API_BASE_URL}/users/current`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while fetching user data. Please try again.");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("avatar", userData.avatar);

    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.REACT_APP_API_BASE_URL}/users/avatars`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        onClose();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("An error occurred while updating user data. Please try again.");
      });
  };

  const handleEditClick = () => {
    nameInputRef.current.focus();
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
    <div className="HeaderUserInfoModal HeaderModalColor HeaderModalStyle">
      <div
        className="HeaderUserInfoModalClose HeaderIconColor"
        onClick={onClose}
      >
        <svg>
          <use xlinkHref={`${symbolDefs}#icon-exit`} />
        </svg>
      </div>
      <div ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <div className="HeaderUserPhotoContainer">
            {userData.avatar ? (
              <img
                src={URL.createObjectURL(userData.avatar)}
                alt="User"
                className="HeaderUserPhotoBig"
              />
            ) : (
              <svg className="HeaderUserIconBig">
                <use xlinkHref={`${symbolDefs}#icon-user`} />
              </svg>
            )}
            <input
              type="file"
              onChange={(e) =>
                setUserData({ ...userData, avatar: e.target.files[0] })
              }
              className="HeaderUserPhotoInput"
            />
            <svg className="HeaderPlusIcon">
              <use xlinkHref={`${symbolDefs}#icon-plus`} />
            </svg>
          </div>
          <div className="HeaderUserNameContainer">
            <svg className="HeaderUserIconForm">
              <use xlinkHref={`${symbolDefs}#icon-user`} />
            </svg>
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="HeaderUserNameInput"
              ref={nameInputRef}
            />
            <button
              type="button"
              className="HeaderEditIconForm"
              onClick={handleEditClick}
            >
              <svg>
                <use xlinkHref={`${symbolDefs}#icon-edit`} />
              </svg>
            </button>
          </div>
          <button type="submit" className="HeaderSaveButton">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

UserInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
