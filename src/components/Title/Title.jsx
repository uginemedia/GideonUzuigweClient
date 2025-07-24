import React, { useEffect } from "react";
import "./Title.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Title = ({ title1, title2, subTitle }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Gideon - About Me";
  }, []);

  return (
    <div className={`title ${theme}`}>
      <div>
        <h1>
          <span>{title1}</span>
          <span>{title2}</span>
        </h1>
        <h2>{subTitle}</h2>
      </div>
    </div>
  );
};

export default Title;
