import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import LogoLoop from "./components/LogoLoop";

const imageLogos = [
  { src: "/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/company3.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/company4.png", alt: "Company 4", href: "https://company4.com" },
];

export default function Page() {
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
     
    </main>
  );
}
