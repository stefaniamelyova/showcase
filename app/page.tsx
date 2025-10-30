"use client";

import Footer from "@/components/Footer";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import LogoLoop from "../components/LogoLoop";
import Cards from "@/components/Cards";
import MagicBento from "@/components/Cards";
import { link } from "fs";
const imageLogos = [
  { src: "/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/company3.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/company4.png", alt: "Company 4", href: "https://company4.com" },
  { src: "/company5.png", alt: "Company 5", href: "https://company5.com" },
];

export default function Page() {
  const cards = [
    {
      title: "",
      description: "",
      label: "Brand Identity",
      color: "#0A0015",
      image: "projects/nb1.png",
      link: "/nb",
    },
    {
      title: "",
      description: "",
      label: "Brand Identity",
      color: "#120020",
      image: "projects/region2.png",
      link: "/region",
    },
    {
      title: "",
      description: "",
      label: "Mobile App Design",
      color: "#120020",
      image: "projects/app1.png",
      link: "/app",
    },
    {
      title: "",
      description: "",
      label: "Website Redesign",
      color: "#120020",
      image: "projects/belco1.png",
      link: "/belco",
    },
    {
      title: "",
      description: "",
      label: "Mobile App Design",
      color: "#120020",
      image: "projects/waveme1.png",
      link: "/waveme",
    },
    {
      title: "",
      description: "",
      label: "Website Redesign",
      color: "#120020",
      image: "projects/yale1.png",
      link: "/yale",
    },
  ];
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-black
    "
    >
      <Hero />
      <LogoLoop
        className="bottom-35"
        logos={imageLogos}
        speed={40}
        direction="left"
        logoHeight={50}
        gap={40}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technology partners"
      />
      <About />

      <h2
        id="experience"
        className="text-white text-6xl font-extrabold mt-15 -ml-240 "
      >
        Experience
      </h2>
      <Experience
        title="Education"
        text1="High School Diploma, 35th “Dobri Voinikov” Language School — Sofia, Bulgaria (2018–2023)"
        text2="Bachelor of Design in Graphic Design — École de Condé, Nice, France (2023–2024)"
        text3="Bachelor of Science in ICT — Fontys University of Applied Sciences, Eindhoven, Netherlands (2024–Present)"
        bullet1="Obtained DALF C1 certification in French and studied Russian"
        bullet2="Served on the Student Council"
        bullet3="Developed strong linguistic, analytical, and interpersonal skills"
        bullet4="Coursework focused on design thinking, visual communication, and creative strategy"
        bullet5="Strengthened artistic direction and conceptual development skills"
        bullet6="Designed projects integrating French cultural and visual identity"
        bullet7="Specialization in Frontend Development"
        bullet8="Developing projects in Next.js, Tailwind CSS, and Three.js"
        bullet9="Designing in Figma, Adobe Creative Suite, and Blender"
      />
      <Experience
        title="Work Experience"
        text1="Content Creation Intern — Signify (formerly Philips Lighting), Eindhoven, Netherlands (2024 - 2025)"
        text2="Freelance Designer (2023–Present)"
        text3="Academic & Client Projects — Fontys University of Applied Sciences (2024–Present)"
        bullet1="Collaborated directly with the Lead UX Designer on interactive app prototypes for internal applications"
        bullet2="Created engaging visual assets, including graphics, motion videos, and promotional materials"
        bullet3="Gained insight into corporate-level UX and product design workflows"
        bullet4="Designed cohesive brand identities for companies including NB Limited, Reconnect Bulgaria and Region Fruit"
        bullet5="Delivered visual systems, logo design, typography, and social media guidelines"
        bullet6="Managed the entire design process independently — from concept to delivery"
        bullet7="Worked on real-world projects for clients such as Belco Alliance (non-profit university network) and OWOW (software company)"
        bullet8="Designed and developed fully functional web platforms using Next.js, Tailwind CSS."
        bullet9="Applied advanced technical and creative problem-solving to deliver scalable, user-centered outcomes"
      />
      <h2
        id="projects"
        className="text-white text-6xl font-extrabold mt-25 -ml-260 mb-10"
      >
        Projects
      </h2>
      <MagicBento
        cards={cards}
        glowColor="211, 0, 130"
        enableTilt
        enableSpotlight
        enableStars
        clickEffect
      />
    </main>
  );
}
