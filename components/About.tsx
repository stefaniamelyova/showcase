"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = ["skills", "experience", "education"];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="bg-black text-white px-4 md:px-22 ">
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-25">
          <Image
            src="/portrait.png"
            alt="about image"
            width={600}
            height={700}
            className="w-1400px h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Hello, very glad you are here. My name is Stefania Melyova, but you
            can just call me Stefi. I am a 20 years old media design student in
            The Netherlands and an aspiring web designer / front-end developer.
            I like coffee, vacations, but most importantly - art and design. My
            job is to transform a creative idea into a functional design and
            tailor it to the target audience. Then the magic happens, when I
            make it work in real life. A lot of people can teach themselves how
            to code and design, but very few do it from the heart.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-2 border-gray text-gray font-medium px-6 py-1 rounded transition duration-300 ${
                  activeTab === tab ? "bg-gray text-white" : "hover:bg-gray/10"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          {activeTab === "skills" && (
            <ul>
              <li className="mb-2">
                <span className="text-xl font-semibold">UI/UX</span>
                <br />
                Designing Web/App Interfaces
              </li>
              <li className="mb-2">
                <span className="text-xl font-semibold">
                  Front-end Development
                </span>
                <br />
                Developing websites
              </li>
              <li className="mb-2">
                <span className="text-xl font-semibold">User Research</span>
                <br />
                Research on target audience and user behaviour
              </li>
            </ul>
          )}
          {activeTab === "experience" && (
            <ul>
              <li className="mb-2">
                <span className="text-xl font-semibold">Web Designer</span>
                <br />
                WaveMe App
                <br />
                September 2023 - June 2024
              </li>
              <li className="mb-2">
                <span className="text-xl font-semibold">
                  Content Creation Intern
                </span>
                <br />
                Signify
                <br />
                May 2024 - present
              </li>
            </ul>
          )}
          {activeTab === "education" && (
            <ul>
              <li className="mb-2">
                <span className="text-xl font-semibold">35 Highschool</span>
                <br />
                French, Russian, Bulgarian, Philosophy
                <br />
                2018 - 2023
              </li>
              <li className="mb-2">
                <span className="text-xl font-semibold">Ecole de Condé</span>
                <br />
                Graphic Design
                <br />
                2023 - 2024
              </li>
              <li className="mb-2">
                <span className="text-xl font-semibold">Fontys University</span>
                <br />
                Media Design
                <br />
                2024 - 2028 (hopefully :)
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
