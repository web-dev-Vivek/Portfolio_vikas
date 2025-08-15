import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Img from "../assets/react.png";
import Arrow from "../assets/arrow.png";
import ArrowW from "../assets/arrowW.png";
import JAVA from "../assets/java.png";
import PYTHON from "../assets/python.png";
import JS from "../assets/js.png";
import SPRINGBOOT from "../assets/springboot.png";
import NEXT from "../assets/next.png";
import KIVY from "../assets/Kivy.png";
import POSTGRESQL from "../assets/Postgresql.png";
import SUPERBASE from "../assets/supabase.webp";
import SQLITE from "../assets/sqlite.svg";
import GIT from "../assets/git.png";
import DOCKER from "../assets/docker.png";
import OAUTH2 from "../assets/Oauth.png";
import SWAGGER from "../assets/Swagger.png";
import RENDER from "../assets/Render.png";
import RAILWAY from "../assets/Railway.png";
import POSTMAN from "../assets/Postman.png";
import LINUX from "../assets/linux.jpeg";
import NEOVIM from "../assets/Neovim.png";
import BASH from "../assets/bash.png";
import CICD from "../assets/CICD.png";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="w-screen flex flex-col items-center justify-center"
      >
        <div className="md:w-[50vw] pt-30 text-white border-b-2 border-black">
          <img
            className="w-40 h-40 border-white rounded-full"
            src="https://i.pinimg.com/736x/00/fe/19/00fe191b0c4dde7d29d81c67bee0f0cb.jpg"
            alt=""
          />
          <h1
            className="text-3xl"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Lorem ipsum - Lorem, ipsum dolor.
          </h1>
          <p className="text-lg flex items-center flex-wrap">
            Lorem ipsum dolor sit amet consectetur{" "}
            <span className="inline-flex items-center justify-start text-sm bg-blue-300 px-2 py-1 rounded ml-2">
              <img className="w-[20px] h-[20px] mr-1" src={Img} alt="" />
              HELLO GUYS
            </span>{" "}
            <span className="inline-flex items-center text-sm bg-blue-300 px-2 py-1 rounded ml-2">
              <img className="w-[20px] h-[20px] mr-1" src={Img} alt="" />
              HELLO GUYS
            </span>{" "}
            <span className="inline-flex items-center text-sm bg-blue-300 px-2 py-1 rounded">
              <img className="w-[20px] h-[20px] mr-1" src={Img} alt="" />
              HELLO GUYS
            </span>{" "}
            Tum kyu chale aate ho Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet consectetur adipisicing.
          </p>

          <div className="mt-20 flex items-center justify-start">
            <button className="group flex items-center gap-2 bg-white text-black md:hover:bg-black md:hover:text-white border-2 border-white rounded-md px-4 py-3 transition-all duration-300 ease-in-out">
              {/* Normal Arrow */}
              <img
                className="w-[20px] block group-hover:hidden"
                src={Arrow}
                alt="Arrow Icon"
              />
              {/* Hover Arrow */}
              <img
                className="w-[20px] hidden group-hover:block"
                src={ArrowW}
                alt="Arrow Icon White"
              />
              <p>Get in touch</p>
            </button>
          </div>
          <div className="mt-25" style={{ fontFamily: "'Doto', sans-serif" }}>
            Feature
          </div>
          <div
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
            className="text-4xl font-bold"
          >
            Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-t-xl">
                <img
                  className="rounded-t-xl"
                  src="https://via.placeholder.com/500x250"
                  alt="NotesBuddy Screenshot"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  NotesBuddy
                </h3>
                <p
                  className="text-gray-400 text-sm mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  A comprehensive study platform with notes, flashcards,
                  quizzes, AI chatbot, and interactive learning tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded inline-block"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    backgroundColor: "#064E3B",
                    color: "#6EE7B7",
                  }}
                >
                  All Systems Operational
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-t-xl">
                <img
                  className="rounded-t-xl"
                  src="https://via.placeholder.com/500x250"
                  alt="Appwrite MCP Server Screenshot"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Appwrite MCP Server
                </h3>
                <p
                  className="text-gray-400 text-sm mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Model Context Protocol server for seamless Appwrite database
                  operations with 7 powerful tools and 99.9% success rate.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Appwrite
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind
                  </span>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded inline-block"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    backgroundColor: "#064E3B",
                    color: "#6EE7B7",
                  }}
                >
                  All Systems Operational
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-t-xl">
                <img
                  className="rounded-t-xl"
                  src="https://via.placeholder.com/500x250"
                  alt="Spotify Clone Screenshot"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Spotify Clone
                </h3>
                <p
                  className="text-gray-400 text-sm mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Music streaming web app with playlists, search, and responsive
                  UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded inline-block"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    backgroundColor: "#064E3B",
                    color: "#6EE7B7",
                  }}
                >
                  All Systems Operational
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-t-xl">
                <img
                  className="rounded-t-xl"
                  src="https://via.placeholder.com/500x250"
                  alt="Portfolio Builder Screenshot"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Portfolio Builder
                </h3>
                <p
                  className="text-gray-400 text-sm mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Drag-and-drop portfolio builder with instant preview and
                  export.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    GSAP
                  </span>
                  <span className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind
                  </span>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded inline-block"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    backgroundColor: "#78350F",
                    color: "#FCD34D",
                  }}
                >
                  Building in Progress
                </div>
              </div>
            </div>
          </div>

          <div className="mt-25" style={{ fontFamily: "'Doto', sans-serif" }}>
            Feature
          </div>
          <div
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
            className="text-4xl font-bold"
          >
            Projects
          </div>
          <div className="flex flex-row items-center gap-8 bg-[#0F0F0F] p-6 rounded-lg max-w-3xl">
            {/* Avatar Section */}
            <div className="w-40 h-40 bg-yellow-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="your-avatar.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text + Skills */}
            <div className="flex flex-col gap-3">
              {/* Name */}
              <h2 className="text-white text-xl font-bold">Vikas Jha</h2>

              {/* Description */}
              <p className="text-gray-300 text-sm max-w-xl">
                I'm a Full Stack web developer and Open Source Contributor, I
                love building products to solve real-world problems. I'm
                specialized in building MVP's.
              </p>

              {/* Skills */}

              <div className="space-y-6">
                {/* Languages */}
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={JAVA} alt="Java" className="w-4 h-4" /> Java
                      (Primary)
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={PYTHON} alt="Python" className="w-4 h-4" />{" "}
                      Python
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={JS} alt="JavaScript" className="w-4 h-4" />{" "}
                      JavaScript
                    </div>
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">
                    Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img
                        src={SPRINGBOOT}
                        alt="Spring Boot"
                        className="w-4 h-4"
                      />{" "}
                      Spring Boot
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src="/react.svg" alt="React" className="w-4 h-4" />{" "}
                      React
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={NEXT} alt="Next.js" className="w-4 h-4" />{" "}
                      Next.js
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={KIVY} alt="Kivy" className="w-4 h-4" /> Kivy
                    </div>
                  </div>
                </div>

                {/* Databases */}
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img
                        src={POSTGRESQL}
                        alt="PostgreSQL"
                        className="w-4 h-4"
                      />{" "}
                      PostgreSQL
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={SUPERBASE} alt="Supabase" className="w-4 h-4" />{" "}
                      Supabase
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={SQLITE} alt="SQLite" className="w-4 h-4" />{" "}
                      SQLite
                    </div>
                  </div>
                </div>

                {/* Tools & Tech */}
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">
                    Tools & Tech
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={GIT} alt="Git" className="w-4 h-4" /> Git
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={DOCKER} alt="Docker" className="w-4 h-4" />{" "}
                      Docker
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={OAUTH2} alt="OAuth2" className="w-4 h-4" />{" "}
                      OAuth2
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={SWAGGER} alt="Swagger" className="w-4 h-4" />{" "}
                      Swagger
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={RENDER} alt="Render" className="w-4 h-4" />{" "}
                      Render
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={RAILWAY} alt="Railway" className="w-4 h-4" />{" "}
                      Railway
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={POSTMAN} alt="Postman" className="w-4 h-4" />{" "}
                      Postman
                    </div>
                  </div>
                </div>

                {/* Environment & Workflow */}
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">
                    Environment & Workflow
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={LINUX} alt="Linux" className="w-4 h-4" /> Linux
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={NEOVIM} alt="Neovim" className="w-4 h-4" />{" "}
                      Neovim
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={BASH} alt="Bash" className="w-4 h-4" /> Bash
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-md text-sm text-white">
                      <img src={CICD} alt="CI/CD" className="w-4 h-4" /> CI/CD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
