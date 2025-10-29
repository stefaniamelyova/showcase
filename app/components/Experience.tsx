import BackgroundBubbles from "./BackgroundBubbles";

type ExperienceProps = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
  bullet5: string;
  bullet6: string;
  bullet7: string;
  bullet8: string;
  bullet9: string;
};

export default function Page({
  title,
  text1,
  text2,
  text3,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
  bullet6,
  bullet7,
  bullet8,
  bullet9,
}: ExperienceProps) {
  return (
    <section>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#D30082] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF4FCF] rounded-full blur-[220px]" />
        <div className="absolute top-[30%] right-[30%] w-[40vw] h-[40vw] bg-[#700050] rounded-full blur-[180px]" />
      </div>
      <div
        className="flex flex-col md:flex-row  m-20 text-white bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-white/20
        shadow-md rounded-xl  "
      >
        <div className="border p-10 border-white/20">
          <h2 className="text-4xl font-extrabold">{title}</h2>
          <p className="mt-4">{text1}</p>
          <ul className="list-disc list-inside">
            <li>{bullet1}</li>
            <li>{bullet2}</li>
            <li>{bullet3}</li>
          </ul>
        </div>
        <div className="border p-10 border-white/20">
          <p className="mt-4">{text2}</p>
          <ul className="list-disc list-inside">
            <li>{bullet4}</li>
            <li>{bullet5}</li>
            <li>{bullet6}</li>
          </ul>
        </div>
        <div className="border p-10 border-white/20">
          <p className="mt-4">{text3}</p>
          <ul className="list-disc list-inside">
            <li>{bullet7}</li>
            <li>{bullet8}</li>
            <li>{bullet9}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
