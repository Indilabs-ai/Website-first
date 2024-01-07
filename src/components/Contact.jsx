import React, { useRef, useState } from "react";
import "../App.css";
import Popup from "./Popup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Checks if the email is valid before sending the email
    const isValidEmail = form.current.checkValidity();
    if (!isValidEmail) {
      setPopupMessage("Please enter a valid email address");
      setShowPopup(true);
      return;
    }

    emailjs
      .sendForm(
        "service_ut28ohj", //service ID
        "template_rztahvr", //template ID
        form.current,
        "OhaY6dNsRdIgcwp0D" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          setPopupMessage("Message Sent");
          setShowPopup(true);
        },
        (error) => {
          console.log(error.text);
          setPopupMessage("Failed to send message");
          setShowPopup(true);
        }
      );
  };

  return (
    <>
      <div id="contact" className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-content">
            <p className="contact-heading">Get in touch with us</p>
            <p className="contact-para">
              Please drop your email here and we shall get back to you. We
              promise not to spam you!
            </p>
          </div>
          <div className="contact-form">
            <form action="" ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter email address"
                  required
                />
                <button>Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Popup
        show={showPopup}
        message={popupMessage}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
};

export default Contact;
