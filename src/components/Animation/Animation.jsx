import React from "react";
import "./Animation.css";
import { FadeLoader } from "react-spinners";

const Animation = () => {
  return (
    <div className="animation">
      <FadeLoader color="#ffb400" radius={5} />
    </div>
  );
};

export default Animation;
