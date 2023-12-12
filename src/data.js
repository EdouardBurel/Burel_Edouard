import languageFlags from "./assets/translation-flags.png";
import webDevIcon from "./assets/web-dev.png";
import crm from "./assets/CRM.jpg";
import figma from "./assets/figma.png";
import deadlines from "./assets/deadlines.png";
import github from "./assets/githubLogo.png";
import agile from "./assets/agile.png";

export const NAVBAR = [
  {
    itemsFr: [
      { text: "Compétences", href: "#skills" },
      { text: "Tech Stack", href: "#tech-stack" },
      { text: "Portfolio", href: "#examples" },
      { text: "Parcours profesionnel", href: "#work-history" },
    ],

    itemsEn: [
      { text: "Skills", href: "#skills" },
      { text: "Tech Stack", href: "#tech-stack" },
      { text: "Portfolio", href: "#examples" },
      { text: "Work History", href: "#work-history" },
    ],
  },
];

export const PRESENTATION = [
  {
    french:
      "Professionnel motivé, orienté résultats, et bénéficiant de 10 ans d'expérience professionnelle, je souhaite donner un nouvel élan à ma carrière dans le secteur du développement web. Je cherche désormais à mettre en pratique mes compétences acquises dans ce domaine depuis plus d'un an. Bilingue en anglais et français, je suis reconnu pour mes compétences interpersonnelles qui favorisent une collaboration fluide et productive en équipe.",
    english:
      "As a motivated professional with ten years of experience, I'm looking to pivot my career towards web development. I aim to apply the skills I've acquired over the past year in this field. Being bilingual in English and French, I'm recognized for my strong interpersonal skills, which promote effective teamwork.",
  },

  {
    french:
      "Je suis bassiste! Envie d'une ambiance musicale en parcourant mon CV?",
    english:
      "I'm a bassist! Feel like adding a musical touch while exploring my CV?",
  },
];

export const CORE_CONCEPTS_FR = [
  {
    image: crm,
    title: "Expérience en Gestion de la relation client",
  },
  {
    image: webDevIcon,
    title: "Maîtrise du développement d'une application web",
  },
  {
    image: deadlines,
    title: "Respect des attentes, des délais et du budget",
  },
  {
    image: figma,
    title: "Maîtrise de Figma pour la conception de wireframes",
  },
  {
    image: agile,
    title: "Familiarité avec les méthodologies Agile",
  },
  {
    image: github,
    title: "Utilisation de GitHub",
  },
  {
    image: languageFlags,
    title: "Révision de texte/traduction en anglais",
  },
];

export const CORE_CONCEPTS_EN = [
  {
    image: crm,
    title: "Customer Relationship Management Experience",
  },
  {
    image: webDevIcon,
    title: "Proficiency in Web Application Development",
  },
  {
    image: deadlines,
    title: "Adherence to Expectations, Deadlines, and Budget",
  },
  {
    image: figma,
    title: "Proficient in Figma for wireframe design",
  },
  {
    image: agile,
    title: "Familiarity with Agile methodologies",
  },
  {
    image: github,
    title: "Proficient use of GitHub",
  },
  {
    image: languageFlags,
    title: "Text/translation review in English",
  },
];

export const EXAMPLES = {
  quaiAntique: {
    title: "Quai Antique",
    link: "https://quai-antique-site-restaurant.herokuapp.com/",
    gitLink: "https://github.com/EdouardBurel/quai_antique",
    site: "🔗 Quai Antique - Website",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  nicolas: {
    title: "Nicolas Pieri - Improvisation théâtrale",
    link: "http://nicolaspieri.net/",
    gitLink: "https://github.com/EdouardBurel/Nicolas_Pieri",
    site: "🔗 Nicolas Pieri - Website",
  },
  props: {
    title: "My resume",
    link: "http://nicolaspieri.net/",
    gitLink: "https://github.com/EdouardBurel/Nicolas_Pieri",
  },
  charleshome: {
    gitLink: "https://github.com/EdouardBurel/CharlesHomeApp",
    title: "Charles Home"
  },
};

export const WORK_HIST_FR = [
  {
    title: "Formation Développeur Web FULL STACK | Studi",
    date: "Depuis 2022",
    description:
      "Suivi et participation à des cours en ligne dispensés par des formateurs professionnels. Mise en pratique de mes compétences en développement full-stack en créant des applications web et mobile de A à Z.",
  },
  {
    title:
      "REPRÉSENTANT DES VENTES | CHARLES HOME (Location d'appartements meublés de luxe) - Bruxelles",
    date: "8 ans | 2015 - 2023",
    description: [
      "Gestion commerciale et administrative de 26 appartements de service",
      "Suivi quotidien des demandes, organisation des visites, gestion des contrats",
      "Négociation des contrats et des prix avec des clients internationaux",
      "Gestion d'équipe (3 personnes)",
    ],
  },
  {
    title:
      "VENTES | COORDINATEUR DE RÉUNIONS ET ÉVÉNEMENTS | Hotel Park Inn by Radisson Brussels Midi",
    date: "2014-2015",
    description: [
      "Encodage des données et support CRM sur Salesforce.com",
      "Organisation et coordination des événements",
      "Envoi d'e-mails/newsletters trimestriels pour lancer des promotions",
      "Télévente : suivi des demandes et/ou suivi des e-mails et des offres",
    ],
  },
  {
    title:
      "Traduction / Sous-titrage (ENG / FR) | Titelbild Berlin + Amsterdam",
    date: "2012-2013",
    description: [
      "Traduction de textes variés dans un délai très court",
      "Révision et correction de traductions et de sous-titres",
    ],
  },
];

export const WORK_HIST_EN = [
  {
    title: "FULL STACK Web Developer Training | Studi",
    date: "Since 2022",
    description: [
      "Attending online courses and building web and mobile applications from scratch using full-stack development skills.",
    ],
  },
  {
    title:
      "SALES REPRESENTATIVE | CHARLES HOME (Luxury Furnished Apartment rental) – Brussels",
    date: "8 years | 2015 - 2023",
    description: [
      "Commercial and administrative management of 26 serviced apartments",
      "Daily follow-up on inquiries, organization of visits, contract management",
      "Contracts and prices negotiation with international clients",
      "Team management (3 people)",
    ],
  },
  {
    title:
      "SALES & MEETING & EVENTS COORDINATOR | Hotel Park Inn by Radisson Brussels Midi",
    date: "2014-2015",
    description: [
      "Data encoding and CRM support on Salesforce.com",
      "Organisation and coordination of events",
      "Sending quarterly emails/newsletters to launch promotions",
      "Telesales: following up on inquiries and/or tracking emails and offers",
    ],
  },
  {
    title:
      "Subtitling / Translation (ENG / FR) | Titelbild Berlin + Amsterdam",
    date: "2012-2013",
    description: [
      "Translation of various texts within a very short timeframe",
      "Revision and correction of English / French translations and subtitles",
    ],
  },
];
