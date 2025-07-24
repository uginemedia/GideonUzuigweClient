// src/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Provider component that wraps your application and provides the theme context
export const ThemeProvider = ({ children }) => {
  //The Value of This Use State: If There is localStorage Item of data-theme: return the value else return the value dark.
  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") !== null
      ? localStorage.getItem("data-theme")
      : "dark"
  );

  //This useEffect sets the local storage of data-theme everytime the components mounts. This first checks if there is already a value for the data-theme in the local storage, if there is? return the value else, set the value to dark and also sets the body data-theme attribute to the value of data-theme in the local storage.
  useEffect(() => {
    localStorage.setItem(
      "data-theme",
      `${
        localStorage.getItem("data-theme") !== null
          ? localStorage.getItem("data-theme")
          : "dark"
      }`
    );
    document.body.setAttribute(
      "data-theme",
      localStorage.getItem("data-theme")
    );
    // console.log("From the Use Effect: ", theme);
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, []);

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  //The useEffect always runs when the value of the theme changes and it's when the above function "ToggleTheme" runs. This checks is the theme value is either light or dark and sets the local storage and body attribute to the value of the theme
  useEffect(() => {
    if (theme === "light") {
      localStorage.setItem("data-theme", theme);
      return document.body.setAttribute("data-theme", theme);
    } else if (theme === "dark") {
      localStorage.setItem("data-theme", theme);
      return document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Provide the theme and toggleTheme function to the component tree
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
