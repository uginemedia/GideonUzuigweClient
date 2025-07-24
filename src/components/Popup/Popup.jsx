import React, { useEffect } from "react";
import "./Popup.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

const Popup = (props) => {
  const byteArray = new Uint8Array(props.item.preview_image.data.data);
  const blob = new Blob([byteArray], { type: props.item.preview_image.contentType });
  const imageUrl = URL.createObjectURL(blob)
  const { theme } = useTheme();
  useEffect(() => {
    document.body.style.position = "fixed";

    return () => {
      document.body.style.position = "relative";
    };
  }, []);
  return (
    <div className={`portfolio_component ${theme}`}>
      <div className="portfolio_data">
        <h2>{props.item.type}</h2>
        <div className="portfolio_details">
          <div>
            <PiProjectorScreenChartThin />
            <span>Project </span>
            <span>:</span>
            <span>{props.item.project}</span>
          </div>
          <div>
            <CiUser />
            <span>Client </span>
            <span>:</span>
            <span>{props.item.client}</span>
          </div>
          <div>
            <FaCode />
            <span>Languages </span>
            <span>:</span>
            <span>{props.item.languages}</span>
          </div>
          <div>
            <GoLinkExternal />
            <span>Preview </span>
            <span>:</span>
            <span>
              <a href={props.item.preview} target="_blank">
                {props.item.preview}
              </a>
            </span>
          </div>
        </div>
        <img src={imageUrl} alt="Preview" />
      </div>
      <div className="portfolio_close_div">
        <button onClick={props.closePortfolio}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default Popup;
