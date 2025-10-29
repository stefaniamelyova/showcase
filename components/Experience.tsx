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
      <div className="absolute top-540 -left-40 bg-[#D30082] text-white p-2 rounded-br-lg h-80 w-80 opacity-90 blur-[150px]"></div>
      <div className="absolute top-440 -right-40 bg-[#D30082] text-white p-2 rounded-br-lg h-80 w-80 opacity-90 blur-[150px]"></div>
      <div
        className=" relative  flex flex-col md:flex-row  ml-24 mr-24 mt-15 text-white bg-[rgba(255,255,255,0.06)] backdrop-blur-2xl border border-white/20
        shadow-md rounded-xl  "
      >
        <div className="border p-10 border-white/20">
          <h2 className="text-4xl font-extrabold">{title}</h2>
          <p className="mt-4 font-bold mb-4 ">{text1}</p>
          <ul className="list-disc list-inside">
            <li>{bullet1}</li>
            <li>{bullet2}</li>
            <li>{bullet3}</li>
          </ul>
        </div>
        <div className="border p-10 border-white/20">
          <p className="mt-4 font-bold mb-4">{text2}</p>
          <ul className="list-disc list-inside">
            <li>{bullet4}</li>
            <li>{bullet5}</li>
            <li>{bullet6}</li>
          </ul>
        </div>
        <div className="border p-10 border-white/20">
          <p className="mt-4 font-bold mb-4">{text3}</p>
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
