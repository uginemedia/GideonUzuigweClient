import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { IoMdMailUnread } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import axios from "axios";

const Contact = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Gideon - Get In Touch With Me";
  }, []);

  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const submitBtn = useRef(null);

  async function submitFormDetails(e) {
    let prevText = submitBtn.current.innerHTML;
    submitBtn.current.innerHTML = "<span>Sending...</span>";
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://uwz65y3c4ckkial3oqeuhqc6re0bugtf.lambda-url.eu-north-1.on.aws/send-mail",
        {
          name: name,
          senderEmail: senderEmail,
          receiverEmail: receiverEmail,
          text: message,
        }
      );
      submitBtn.current.innerHTML = "SENT";
      setSenderEmail("");
      setReceiverEmail("");
      setName("");
      setMessage("");
      alert("Your message was successfully sent 😎");
      setTimeout(() => {
        submitBtn.current.innerHTML = prevText;
      }, 3000);
    } catch (err) {
      submitBtn.current.innerHTML = "Not Sent...";
      setTimeout(() => {
        submitBtn.current.innerHTML = prevText;
      }, 3000);
    }
  }

  return (
    <div className="container">
      <div className="contact_info">
        <div className={`contact_text ${theme}`}>
          <h3>Don't be shy!</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact_img_text">
            <span className="icon">
              <IoMdMailUnread />
            </span>
            <div>
              <span>MAIL ME</span>
              <span>Uzuigwegideon@gmail.com</span>
            </div>
          </div>
          <div className="contact_img_text">
            <span className="icon">
              <FaSquarePhone />
            </span>
            <div>
              <span>CALL ME</span>
              <span>+234 906 015 1115</span>
            </div>
          </div>
          <div className="socials">
            <div>
              <a href="https://www.linkedin.com/in/gideon-uzuigwe-2a740b259/">
                <FaLinkedinIn />
              </a>
            </div>
            <div>
              <a href="https://github.com/uginemedia">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={`contact_form ${theme}`}>
          <form onSubmit={submitFormDetails}>
            <div>
              <input
                type="name"
                name="name"
                placeholder="YOUR NAME"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                type="email"
                name="SenderEmail"
                placeholder="SENDER EMAIL"
                onChange={(e) => setSenderEmail(e.target.value)}
                value={senderEmail}
                required
              />
              <input
                type="email"
                name="Receiver Email"
                placeholder="RECEIVER EMAIL"
                onChange={(e) => setReceiverEmail(e.target.value)}
                value={receiverEmail}
                required
              />
            </div>

            <textarea
              rows={8}
              name="message"
              placeholder="YOUR MESSAGE"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            ></textarea>
            <button className={`btn ${theme} lg`} ref={submitBtn}>
              <span>Submit</span>
              <span></span>
              <span className="btn_icon">
                <BsFillSendFill />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
