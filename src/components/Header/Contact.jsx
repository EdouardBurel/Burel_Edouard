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
            <p style={{ fontSize: '3rem' }}>👋</p>
            <p>📧 burel-edouard@hotmail.fr</p>
            <p>📞 (+33) 07-77-34-38-89</p>
          </div>
        </div>
      )}
    </div>
  );
}
