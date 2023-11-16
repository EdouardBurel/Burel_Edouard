import { useState } from "react";

export default function Contact({ islanguage }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div className="contactBtn">
      <button id="contactButton" onClick={toggleFormVisibility}>
        {islanguage === 'FR' ? 'Me contacter' : 'Contact me'}
      </button>

      {isFormVisible && (
        <div className="contact-overlay">
          <div className="contact-form">
            <button className="close-button" onClick={toggleFormVisibility}>
              &#x2716;
            </button>
            <h2>Contact Information :</h2>
            <p>bureledo@gmail.com</p>
            <p>+32 (0)483 54 00 08</p>
          </div>
        </div>
      )}
    </div>
  );
}
