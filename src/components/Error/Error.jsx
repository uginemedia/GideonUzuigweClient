import React, { useEffect } from "react";
import "./Error.css";
import { IoIosArrowBack } from "react-icons/io";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useNavigate } from "react-router-dom"; 

const Error = () => {
  const { theme } = useTheme();
  useEffect(() => { 
    document.title = "Error 404 - Page Not Found";
  }, []);
  const history = useNavigate();

  function pushBack() {
    history(-1);
  }

  return (
    <div className={`error ${theme}`}>
      <h1>404 Page not found</h1>
      <div onClick={pushBack}>
        <span>
          <IoIosArrowBack />
        </span>
        <span>Go Back</span>
      </div>
    </div>
  );
};

export default Error;
