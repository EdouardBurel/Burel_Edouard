import languageFlags from "./assets/translation-flags.png";
import webDevIcon from "./assets/web-dev.png";
import crm from "./assets/CRM.jpg";
import figma from "./assets/figma.png";
import deadlines from "./assets/deadlines.png";
import github from "./assets/githubLogo.png";
import agile from "./assets/agile.png";
import qAntique from "./assets/chef3.jpg";
import qAntique1 from "./assets/chef4.jpg";
import qAntique2 from "./assets/chef5.jpg";
import nico from "./assets/nico1.jpg";
import nico2 from "./assets/nico2.jpg";
import cvPage from "./assets/images2.jpg";
import albums from "./assets/albums1.jpg";
import albums2 from "./assets/albums2.jpg";

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
      "Professionnel motivé et passionné par le domaine numérique, je suis constamment à l'affût des dernières avancées technologiques, notamment via Daily Dev. Avec 2 ans d'expérience personnelle en fullstack, j'ai réalisé divers projets et développé des sites web, démontrant ma polyvalence et ma capacité à concrétiser des idées innovantes. Fort de 10 années d'expérience dans d'autres domaines, je suis orienté résultats et reconnu pour mes compétences interpersonnelles. Ma maîtrise bilingue de l'anglais et du français facilite la collaboration au sein d'équipes multiculturelles. Je suis prêt à relever de nouveaux défis dans le secteur du développement web! 😀",
    english:
      "Motivated professional with a passion for the digital domain, I enjoy following the latest technological advancements through Daily Dev. With 2 years of personal fullstack experience, I have completed various projects and developed websites to challenge myself and learn. With 10 years of experience in other fields, I am results-oriented and recognised for my interpersonal skills. My bilingual proficiency in English and French facilitates collaboration within multicultural teams. I am ready to take on new challenges in the web development sector! 😀",
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
  albumSearch: {
    images: [albums, albums2],
    title: "Album Search - API Spotify",
    link: "https://edouardburel.github.io/ArtistDiscography/",
    gitLink: "https://github.com/EdouardBurel/ArtistDiscography",
    site: "🔗 Album Search",
    description: {
      EN: "I'm passionate about album covers! This personal project allows users to view albums from an artist or band with just one click. I've integrated the Spotify API to fetch album information for this project.",
      FR: "J'adore les pochettes d'albums ! Ce projet personnel permet aux utilisateurs de consulter les albums d'un artiste ou d'un groupe en un seul clic. J'ai intégré l'API Spotify pour récupérer les informations sur les albums pour ce projet.",
    },
  },
  quaiAntique: {
    images: [qAntique, qAntique1, qAntique2],
    title: "Quai Antique",
    link: "https://quai-antique-site-restaurant.herokuapp.com/",
    gitLink: "https://github.com/EdouardBurel/quai_antique",
    site: "🔗 Quai Antique - Website",
    description: {
      EN: "This is my very first project — a fictional restaurant app with responsive design and both user and admin access. The tech stack for this app includes PHP for the backend, JavaScript, the Bootstrap framework, CRUD operations, and MySQL for the database.",
      FR: "Ceci est mon tout premier projet - une application de restaurant fictive responsive et un accès utilisateur et administrateur. La tech stack pour cette application comprend du PHP pour le backend, JavaScript, le framework Bootstrap, les opérations CRUD et MySQL pour la base de données.",
    },
  },
  nicolas: {
    images: [nico, nico2],
    title: "Nicolas Pieri - Improvisation théâtrale",
    link: "https://www.nicolaspieri.net/",
    gitLink: "https://github.com/EdouardBurel/Nicolas_App",
    site: "🔗 Nicolas Pieri - Website",
    description: {
      EN: " This project is a showcase website that I created for a client. The tech stack used for this app includes React and Node.js. On the server side, I used Ionos and GitHub Pages for deployment.",
      FR: "Ce projet est un site vitrine que j'ai réalisé pour un client. La stack technologique utilisée pour cette application inclut React et Node.js. Côté serveur, j'ai utilisé Ionos et GitHub Pages pour le déploiement.",
    },
  },
  props: {
    images: [cvPage],
    title: "My resume",
    gitLink: "https://github.com/EdouardBurel/Burel_Edouard",
    description: {
      EN: "This project is the website you are currently viewing, built using React. :-)",
      FR: " Ce projet est le site que vous consultez actuellement, développé avec React. :-)",
    },
  },
  charleshome: {
    gitLink: "https://github.com/EdouardBurel/CharlesHomeApp",
    title: "Charles Home",
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
    title: "Subtitling / Translation (ENG / FR) | Titelbild Berlin + Amsterdam",
    date: "2012-2013",
    description: [
      "Translation of various texts within a very short timeframe",
      "Revision and correction of English / French translations and subtitles",
    ],
  },
];
