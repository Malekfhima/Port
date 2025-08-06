// Import des images
import gestionstock from "./assets/images/gestionstock.png";
import img from "./assets/images/profile.jpg";

const ismaik = "https://ismaik.rnu.tn/";
const logotext = "MALEK";
const meta = {
  title: "Malek - Portfolio",
  description:
    "Développeur Full Stack passionné par les technologies web modernes, spécialisé en React, Node.js et Python",
};

const introdata = {
  title: "Je suis Malek",
  animated: {
    first: "Je développe des applications web",
    second: "Je crée des expériences utilisateur",
    third: "Je code des solutions innovantes",
  },
  description:
    "Développeur Full Stack passionné avec une expertise en développement web moderne. Je combine créativité et technique pour créer des applications performantes et intuitives.",
  your_img_url: img,
};

const dataabout = {
  title: "À propos de moi",
  aboutme:
    "Je suis un développeur Full Stack passionné par les technologies web modernes. Avec une solide expérience en développement front-end et back-end, je crée des applications web performantes et intuitives. Je suis constamment en train d'apprendre de nouvelles technologies et de m'améliorer dans mon domaine.",
};

const worktimeline = [
  {
    jobtitle: "Stage d'été",
    where: "INRITS AGENCY",
    date: "2025",
  },
];

const skills = [
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS",
    value: 80,
  },
  {
    name: "JavaScript",
    value: 70,
  },
  {
    name: "PHP",
    value: 80,
  },
  {
    name: "MySQL",
    value: 75,
  },
  {
    name: "Python",
    value: 70,
  },
  {
    name: "C",
    value: 50,
  },
  {
    name: "Git",
    value: 70,
  },
];

const services = [
  {
    title: "Développement Frontend",
    description:
      "Création d'interfaces utilisateur modernes et responsives avec HTML5, CSS3 et JavaScript. Design de sites web attrayants et optimisés pour tous les appareils.",
  },
  {
    title: "Développement Backend",
    description:
      "Développement d'applications serveur robustes avec PHP et gestion de bases de données MySQL. Création d'APIs et de systèmes d'authentification sécurisés.",
  },
  {
    title: "Programmation Python",
    description:
      "Développement d'applications Python pour l'automatisation, l'analyse de données et la création de scripts utilitaires. Maîtrise des bibliothèques populaires.",
  },
  {
    title: "Programmation C",
    description:
      "Développement d'applications système et de programmes de bas niveau en langage C. Optimisation des performances et gestion de la mémoire.",
  },
];

const dataportfolio = [
  {
    img: gestionstock,
    description: "Application de gestion de stock",
    link: "https://gestionstock.free.nf/index.php?i=1",
  },
  {
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    description: "Dashboard analytique avec visualisations interactives",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    description: "Application de gestion de tâches collaborative",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    description: "Site web responsive pour entreprise locale",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Application mobile hybride avec React Native",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    description: "API REST pour service de géolocalisation",
    link: "#",
  },
];

const certificates = [
  {
    title: "Certification Intelligence Artificielle",
    issuer: "Club Google ISITCOM",
    date: "28/01/2024",
    description:
      "Formation et certification en Intelligence Artificielle couvrant les concepts fondamentaux de l'IA, le machine learning et les applications pratiques des technologies d'intelligence artificielle.",
  },
];

const education = [
  {
    degree: "Baccalauréat en Sciences Informatiques",
    institution: "Lycée Secondaire Farhat Hached M'saken",
    date: "2022 - 2023",
    description:
      "Formation technique de base avec spécialisation en sciences et technologies.",
    link: "",
  },
  {
    degree: "Licence en Ingénierie des systèmes d'information",
    institution: "ISMAI Kairouan",
    date: "2023 - 2024",
    description: "Formation complète en Ingénierie des systèmes d'information",
    link: ismaik,
  },
  {
    degree: "Licence en Internet des Objets et Systèmes Embarqués",
    institution: "ISITCOM Sousse",
    date: "2024 - Présent",
    description:
      "Formation complète en Internet des Objets et Systèmes Embarqués",
    link: "https://isitcom.rnu.tn/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "malekfhihi@gmail.com",
  YOUR_FONE: "+216 25 992 977",
  description:
    "N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration. Je suis toujours ouvert aux nouvelles opportunités passionnantes.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Malekfhima",
  linkedin: "www.linkedin.com/in/malek-fhima-1898a8349",
  twitter: "https://twitter.com/malek_dev",
  instagram: "https://instagram.com/malek_dev",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  certificates,
  education,
};
