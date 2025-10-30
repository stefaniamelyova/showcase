import MagicBento from "@/components/Cards";

export default function Page() {
  const cards = [
    {
      title: "",
      description: "",
      label: "Logo",
      color: "#0A0015",
      image: "projects/region2.png",
      link: "/nb",
    },
    {
      title: "",
      description: "",
      label: "Typeography",
      color: "#120020",
      image: "projects/region3.png",
    },
    {
      title: "",
      description: "",
      label: "Logo",
      color: "#120020",
      image: "projects/region1.png",
    },
    {
      title: "",
      description: "",
      label: "Package Mockups",
      color: "#120020",
      image: "projects/region5.png",
    },
    {
      title: "",
      description: "",
      label: "Typoography",
      color: "#120020",
      image: "projects/region4.png",
    },
    {
      title: "",
      description: "",
      label: "Logo",
      color: "#120020",
      image: "projects/region6.png",
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
