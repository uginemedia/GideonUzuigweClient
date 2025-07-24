import React from "react";
import "./Modes.css";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../ThemeProvider/ThemeProvider.jsx";

const Modes = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`modes ${theme}`}>
      {theme === "dark" ? (
        <button onClick={toggleTheme}>
          <MdLightMode />
        </button>
      ) : (
        <button className="md-dark" onClick={toggleTheme}>
          <MdOutlineDarkMode />
        </button>
      )}
    </div>
  );
};

export default Modes;
