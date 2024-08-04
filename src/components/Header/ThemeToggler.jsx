// src\components\Header\ThemeToggler.jsx
import { useState, useEffect } from "react";
import "../../styles/Header.css";

export const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div
      className={`HeaderSwitch ${isDarkMode ? "HeaderSwitchOn" : ""}`}
      onClick={toggleTheme}
    >
      <div className={`HeaderKnob ${isDarkMode ? "HeaderKnobOn" : ""}`} />
    </div>
  );
};
