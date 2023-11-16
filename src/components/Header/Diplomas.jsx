import logo from "../../assets/diploma.jpg"; // Replace with your actual path

export default function Diplomas({ islanguage }) {
  return (
    <div className="professional-title">
      <div className="bordered-box">
        <img src={logo} alt="Logo" className="logo" />
        <div className="title-line">
          BAC+2{" "}
          {islanguage === "FR"
            ? "Titre professionnel - Développeur web et web mobile"
            : "Professional Title - Web and Mobile Web Developer"}
        </div>
        <div className="title-line">
        BAC+5{" "}
          {islanguage === "FR"
            ? "Master Langues Etrangères Appliquées"
            : "Master's in Applied Foreign Languages"}
        </div>
      </div>
    </div>
  );
}
