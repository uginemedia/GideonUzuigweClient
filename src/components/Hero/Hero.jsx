import React, { useEffect } from "react";
import "./Hero.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import user from "../../assets/user.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="hero_section">
      <div className="diagonal"></div>
      <div className="hero" data-aos="fade-up">
        <div className={`hero_img ${theme}`}>
          <img src={user} alt="user image" />
        </div>
        <div className="hero_texts" id={theme}>
          <div className="text">
            <h1>I'm Gideon Uzuigwe</h1>
            <span>Web Developer</span>
          </div>

          <p>
            I'm a proactive college web developer. Adept in all stages of
            advanced web developement. I am based on both front‑end and back‑end
            developement. I am focused on crafting clean & user‑friendly
            experiences.
          </p>
          <Link to="/about">
            <span>More About me</span>
            <span>
              <BsArrowRightShort />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
