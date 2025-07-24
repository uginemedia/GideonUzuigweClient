import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { BiSolidMessageRounded } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  useEffect(() => {
    AOS.init({
      //   disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  //Import the useTheme
  const { theme } = useTheme();

  const [openBar, setOpenBar] = useState(false);
  function handleOpenBar() {
    setOpenBar((prevBar) => !prevBar);
  }

  function handleNavClick() {
    setOpenBar(false);
  }

  return (
    <div>
      <header className={`header_header ${openBar ? "open" : ""}`}>
        <nav>
          <ul className="header_ul" data-aos="fade-up" id={theme}>
            <NavLink
              exact="true"
              to={"/"}
              activeclassname="active"
              onClick={handleNavClick}
            >
              <FaHome />
              <div className="title_link">Home</div>
            </NavLink>
            <NavLink
              to={"/about"}
              activeclassname="active"
              onClick={handleNavClick}
            >
              <FaUser />
              <div className="title_link">About</div>
            </NavLink>
            <NavLink
              to={"/my-portfolio"}
              activeclassname="active"
              onClick={handleNavClick}
            >
              <FaBriefcase />
              <div className="title_link">Portfolio</div>
            </NavLink>
            <NavLink
              to={"/contact-me"}
              activeclassname="active"
              onClick={handleNavClick}
            >
              <RiMailOpenFill />
              <div className="title_link">Contact</div>
            </NavLink>
          </ul>
        </nav>
      </header>
      <aside className={`aside ${theme}`}>
        {openBar ? (
          <button onClick={handleOpenBar}>
            <IoMdClose />
          </button>
        ) : (
          <button onClick={handleOpenBar}>
            <HiBars3 />
          </button>
        )}
      </aside>
    </div>
  );
};

export default Header;
