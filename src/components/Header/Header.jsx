import reactImg from "../../assets/profil.jpg";
import AudioFile from "../../assets/peace.mp3";
import { useState } from "react";
import { useRef } from "react";
import { PRESENTATION } from "../../data";
import Contact from "./Contact";
import Diplomas from "./Diplomas";


export default function Header({ islanguage }) {

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioElement = useRef(null);

  if (!audioElement.current) {
    audioElement.current = new Audio(AudioFile);
  }

  const handleToggleChange = () => {
    if (isMusicPlaying) {
      audioElement.current.pause();
      audioElement.current.currentTime = 0;
    } else {
      audioElement.current.play();
      audioElement.current.loop = true;
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <header>
      <section id="container-presentation">
        <div className="main-presentation">
          <img src={reactImg} alt="Stylized atom" />
          <div className="presentation">
            <div>
              <h1>Edouard Burelus</h1>
              <p>
                {islanguage === "FR"
                  ? PRESENTATION[0].french
                  : PRESENTATION[0].english}
              </p>
            </div>
          </div>
        </div>
        <Contact islanguage={islanguage} />
        <div className="toggle-container">
          <div className="toggle-music">
            <input
            className="inputMusic"
            type="checkbox"
            id="toggle"
            onChange={handleToggleChange}
            checked={isMusicPlaying}
          />
          <label className="labelMusic" htmlFor="toggle"></label>
          <div id="grooveLine">
            <span>
              {islanguage === "FR"
                ? PRESENTATION[1].french
                : PRESENTATION[1].english}
            </span>
          </div>
          </div>
          <Diplomas islanguage={islanguage} />
        </div>
      </section>
    </header>
  );
}
