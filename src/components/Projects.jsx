import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import gitLogo from "../assets/github.png";
import charleshome from "../assets/vidCH.mp4";

export default function Projects({ islanguage }) {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  const linkStyle = {
    width: "25px",
    filter: "invert(1)",
    marginRight: "10px",
  };

  const siteStyle = {
    textDecoration: "none",
    color: "#89c0d8",
  };

  let tabContent = (
    <p>
      {islanguage === "FR"
        ? "Veuillez selectionner un projet"
        : "Please select a project"}
      .
    </p>
  );

  if (selectedTopic) {
    if (selectedTopic === "charleshome") {
      tabContent = (
        <video controls width="90%" muted>
          <source
            src={charleshome}
            type="video/mp4"
            style={{ maxHeight: "200px" }}
          />
        </video>
      );
    } else {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>
            <a
              href={EXAMPLES[selectedTopic].link}
              target="_blank"
              style={siteStyle}
            >
              {EXAMPLES[selectedTopic].site}
            </a>
          </p>
          <p>
            <img src={gitLogo} alt="Github-logo" style={linkStyle} />
            <a
              href={EXAMPLES[selectedTopic].gitLink}
              target="_blank"
              style={siteStyle}
            >
              GitHub Repository
            </a>
          </p>
        </div>
      );
    }
  }

  return (
    <Section title= {islanguage === "FR" ? "Projets & Réalisations" : "Projects & Accomplishments" }  id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "quaiAntique"}
              onSelect={() => handleSelect("quaiAntique")}
            >
              PHP - {islanguage === "FR" ? "Site web Restaurant" : "Restaurant Website" } 
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "nicolas"}
              onSelect={() => handleSelect("nicolas")}
            >
              REACT - {islanguage === "FR" ? "Site vitrine" : "Showcase Website" }
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              REACT - {islanguage === "FR" ? "CV en ligne" : "Online Resume" } 
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "charleshome"}
              onSelect={() => handleSelect("charleshome")}
            >
              PHP - {islanguage === "FR" ? "Application de gestion locative" : "Property management application" }
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
    </Section>
  );
}
