"use client";

import Footer from "@/components/Footer";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import LogoLoop from "../components/LogoLoop";
import Cards from "@/components/Cards";
import MagicBento from "@/components/Cards";
const imageLogos = [
  { src: "/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/company3.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/company4.png", alt: "Company 4", href: "https://company4.com" },
];

export default function Page() {
  const cards = [
    {
      title: "Analytics",
      description: "Track user behavior",
      label: "Insights",
      color: "#0A0015",
      image: "/logo.png",
    },
    {
      title: "Dashboard",
      description: "Centralized data view",
      label: "Overview",
      color: "#120020",
    },
    {
      title: "Dashboard",
      description: "Centralized data view",
      label: "Overview",
      color: "#120020",
    },
    {
      title: "Dashboard",
      description: "Centralized data view",
      label: "Overview",
      color: "#120020",
    },
    {
      title: "Dashboard",
      description: "Centralized data view",
      label: "Overview",
      color: "#120020",
    },
    {
      title: "Dashboard",
      description: "Centralized data view",
      label: "Overview",
      color: "#120020",
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

      <h2 id="experience" className="text-white text-6xl font-extrabold mt-15 -ml-240 ">
        Experience
      </h2>
      <Experience
        title="Education"
        text1="High School Diploma, 35th “Dobri Voinikov” Language School — Sofia, Bulgaria (2018–2023)"
        text2="Master of Science in Software Engineering, ABC Institute"
        text3="Relevant coursework includes Data Structures, Algorithms, Web Development, and Database Systems."
        bullet1="Graduated with Honors"
        bullet2="Dean's List for 6 semesters"
        bullet3="Completed a capstone project on web application security"
        bullet4="Participated in coding competitions and hackathons"
        bullet5="Member of the Computer Science Club"
        bullet6="Interned at Tech Company during summer 2022"
        bullet7="Volunteered as a tutor for introductory programming courses"
        bullet8="Attended workshops on emerging technologies"
        bullet9="Collaborated on open-source projects"
      />
      <Experience
        title="Education"
        text1="Bachelor of Science in Computer Science, XYZ University"
        text2="Master of Science in Software Engineering, ABC Institute"
        text3="Relevant coursework includes Data Structures, Algorithms, Web Development, and Database Systems."
        bullet1="Graduated with Honors"
        bullet2="Dean's List for 6 semesters"
        bullet3="Completed a capstone project on web application security"
        bullet4="Participated in coding competitions and hackathons"
        bullet5="Member of the Computer Science Club"
        bullet6="Interned at Tech Company during summer 2022"
        bullet7="Volunteered as a tutor for introductory programming courses"
        bullet8="Attended workshops on emerging technologies"
        bullet9="Collaborated on open-source projects"
      />
      <h2 id="projects" className="text-white text-6xl font-extrabold mt-25 -ml-260 mb-10">
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
