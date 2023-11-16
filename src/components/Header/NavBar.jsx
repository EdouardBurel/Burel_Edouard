import React, { useState } from "react";
import { NAVBAR } from "../../data";

function NavBar({ setIslanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIslanguage(language);
  };

  const languageSelect = (
    <div className="language-select">
      <span
        className={selectedLanguage === "FR" ? "selected-language" : ""}
        onClick={() => handleLanguageChange("FR")}
      >
        FR
      </span>
      <span className="language-divider">|</span>
      <span
        className={selectedLanguage === "EN" ? "selected-language" : ""}
        onClick={() => handleLanguageChange("EN")}
      >
        EN
      </span>
    </div>
  );

  return (
    <div>
      <nav className={`navbar ${showNavLinks ? 'margin-on-navbar' : ''}`}>
        <div><h3>Edouard Burel</h3></div>
        <button
          className={`toggle-button ${showNavLinks ? "active" : ""}`}
          onClick={toggleNavLinks}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {NAVBAR.map((conceptItem, index) => (
          <ul className={`nav-links ${showNavLinks ? "show" : ""}`} key={index}>
            {selectedLanguage === "FR"
              ? conceptItem.itemsFr.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))
              : conceptItem.itemsEn.map((item, subIndex) => (
                <li key={subIndex}>
                <a href={item.href}>{item.text}</a>
              </li>
                ))}
            <li>{languageSelect}</li>
          </ul>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
