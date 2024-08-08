// src\components\Header\UserInfoModal.jsx
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";
import { fetchUserData } from "../../utils/fetchUserData";
import Cookies from "../../features/cookies";

export const UserInfoModal = ({ onClose }) => {
  const [userData, setUserData] = useState({ avatarURL: "", name: "" });
  const [avatarFile, setAvatarFile] = useState(null);
  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchUserData();
        console.log("Fetched user data in UserInfoModal:", response);
        setUserData({
          ...response.data,
          avatarURL: `https://deploy-marek-b05855e6af89.herokuapp.com${response.data.avatarURL}`,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("An error occurred while fetching user data. Please try again.");
      }
    };

    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.readCookie();

    try {
      const nameResponse = await fetch(
        "https://deploy-marek-b05855e6af89.herokuapp.com/api/v1/users/update-name",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: userData.name }),
        }
      );

      if (!nameResponse.ok) {
        const error = await nameResponse.json();
        throw new Error(error.message || "Failed to update user name");
      }

      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);

        const avatarResponse = await fetch(
          "https://deploy-marek-b05855e6af89.herokuapp.com/api/v1/users/avatars",
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!avatarResponse.ok) {
          const error = await avatarResponse.json();
          throw new Error(error.message || "Failed to update user avatar");
        }

        const avatarData = await avatarResponse.json();
        console.log("Updated avatar data:", avatarData);
        setUserData({
          ...userData,
          avatarURL: `https://deploy-marek-b05855e6af89.herokuapp.com${avatarData.data.avatarURL}`,
        });
      }

      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
      alert(`An error occurred while updating user data: ${error.message}`);
    }
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
            {userData.avatarURL ? (
              <img
                src={userData.avatarURL}
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
              onChange={(e) => {
                setUserData({
                  ...userData,
                  avatarURL: URL.createObjectURL(e.target.files[0]),
                });
                setAvatarFile(e.target.files[0]);
              }}
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
