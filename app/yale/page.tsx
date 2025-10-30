import MagicBento from "@/components/Cards";

export default function Page() {
  const cards = [
    {
      title: "",
      description: "",
      label: "Website Design",
      color: "#0A0015",
      image: "projects/yale1.png",
      link: "/nb",
    },
    {
      title: "",
      description: "",
      label: "Home Screen",
      color: "#120020",
      image: "projects/yale2.png",
    },
    {
      title: "",
      description: "",
      label: "Website Design",
      color: "#120020",
      image: "projects/yale3.png",
    },
    {
      title: "",
      description: "",
      label: "Website Design",
      color: "#120020",
      image: "projects/yale4.png",
    },
    {
      title: "",
      description: "",
      label: "Website Features",
      color: "#120020",
      image: "projects/yale5.png",
    },
    {
      title: "",
      description: "",
      label: "Website Features",
      color: "#120020",
      image: "projects/yale6.png",
    },
  ];
  return (
    <section className="  mt-20">
      <div className="absolute -top-10 -left-40 bg-[#D30082] text-white p-2 rounded-br-lg h-85 w-85 opacity-90 blur-[150px]"></div>
      <div className="absolute top-150 -right-40 bg-[#D30082] text-white p-2 rounded-br-lg h-80 w-80 opacity-90 blur-[150px]"></div>
      <MagicBento
        cards={cards}
        glowColor="211, 0, 130"
        enableTilt
        enableSpotlight
        enableStars
        clickEffect
      />
    </section>
  );
}
