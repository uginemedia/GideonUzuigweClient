import React from "react";
import "./About.css";
import { HiPlus } from "react-icons/hi2";
import Title from "../../components/Title/Title";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { FaDownload } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import user from "../../assets/user.jpg";

const About = () => {
  const { theme } = useTheme();

  function downloadResume(e) {
    const url = "../../resume.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = "Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="container">
      <Title title1="about " title2="me" subTitle="resume" />
      <div className="about">
        <div className={`about-info ${theme}`}>
          <div className="about_image">
            <img src={user} alt="user image" />
          </div>
          <h3>Personal Infos</h3>

          <div className={`about-details ${theme}`}>
            <div>
              <p>
                <span>First Name: </span>
                <span>Gideon</span>
              </p>
              <p>
                <span>Last Name: </span>
                <span>Uzuigwe</span>
              </p>
              <p>
                <span>Age: </span>
                <span>21+</span>
              </p>
              <p>
                <span>Nationality: </span>
                <span>Nigerian</span>
              </p>
              <p>
                <span>Freelance: </span>
                <span>Available</span>
              </p>
            </div>
            <div>
              <p>
                <span>Address: </span>
                <span>Nigeria</span>
              </p>
              <p>
                <span>Phone: </span>
                <span>+234 906 015 1115</span>
              </p>
              <p>
                <span>Email: </span>
                <span>uzuigwegideon@gmail.com</span>
              </p>
              <p>
                <span>Skype: </span>
                <span>gideon.uzuigwe</span>
              </p>
              <p>
                <span>Languages: </span>
                <span>English (Fluent)</span>
              </p>
            </div>
          </div>
          <button className={`btn ${theme}`} onClick={downloadResume}>
            <span>Download Cv</span>
            <span></span>
            <span className="btn_icon">
              <FaDownload />
            </span>
          </button>
        </div>
        <div className={`about-shapes ${theme}`}>
          <div>
            <h3>
              3
              <sup>
                <HiPlus />
              </sup>
            </h3>
            <p>years of experience</p>
          </div>
          <div>
            <h3>
              10
              <sup>
                <HiPlus />
              </sup>
            </h3>
            <p>projects completed</p>
          </div>
          <div>
            <h3>
              5
              <sup>
                <HiPlus />
              </sup>
            </h3>
            <p>happy customers</p>
          </div>
          <div>
            <h3>
              1
              <sup>
                <HiPlus />
              </sup>
            </h3>
            <p>awards won</p>
          </div>
        </div>
      </div>
      <div className={`skill_div ${theme}`}>
        <div className={`line_through ${theme}`}></div>
        <h3>My Skills</h3>
        <div className="skills">
          <div className={`skill ${theme}`}>
            <div>
              <span>100%</span>
            </div>
            <h4>HTML</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>100%</span>
            </div>
            <h4>CSS</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>100%</span>
            </div>
            <h4>JavaScript</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>100%</span>
            </div>
            <h4>React</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>55%</span>
            </div>
            <h4>PHP</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>90%</span>
            </div>
            <h4>Node Js</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>100%</span>
            </div>
            <h4>MongoDb</h4>
          </div>
          <div className={`skill ${theme}`}>
            <div>
              <span>80%</span>
            </div>
            <h4>MySQL</h4>
          </div>
        </div>
        <div className={`line_through ${theme}`}></div>
      </div>
      <div className={`experience_education_div ${theme}`}>
        <h3>Experience & Education</h3>
        <div className="all_details">
          <div className={`experience`}>
            <div className={`exp ${theme}`}>
              <div className="first_exp">
                <div className="exp_icon">
                  <FaBriefcase />
                </div>
                <div className="exp_stroke"></div>
              </div>
              <div>
                <div className="exp_year">2024 - {new Date().getFullYear()}</div>
                <h4>
                  Web Developer <span>-</span> <span>Evanto</span>
                </h4>
                <p>
                  I have created multiple websites designs and template and
                  actually sold few on this website.
                </p>
              </div>
            </div>
            <div className={`exp ${theme}`}>
              <div className="first_exp">
                <div className="exp_icon">
                  <FaBriefcase />
                </div>
                <div className="exp_stroke"></div>
              </div>
              <div>
                <div className="exp_year">2023 - {new Date().getFullYear()} (present)</div>
                <h4>
                  YouTuber <span>-</span> <span>YouTube</span>
                </h4>
                <p>
                  I have a YouTube channel with few subscribers which I am
                  managing at the moment. You can check it out in my Resume.
                </p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className={`exp ${theme}`}>
              <div className="first_exp">
                <div className="exp_icon">
                  <FaBriefcase />
                </div>
                <div className="exp_stroke"></div>
              </div>
              <div>
                <div className="exp_year">2022</div>
                <h4>
                  High School <span>-</span> <span>Grammar High School</span>
                </h4>
                <p>
                  I graduated from grammer school at the year 2022. Am still
                  aspiring to be better in the education path.
                </p>
              </div>
            </div>
            <div className={`exp ${theme}`}>
              <div className="first_exp">
                <div className="exp_icon">
                  <FaBriefcase />
                </div>
                <div className="exp_stroke"></div>
              </div>
              <div>
                <div className="exp_year">2024 - present</div>
                <h4>
                  Bachelor Degree <span>-</span>{" "}
                  <span>University Of Nigeria</span>
                </h4>
                <p>
                  Presently on University studying computer science. Bachelor
                  Degree in Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
