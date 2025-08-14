import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="w-screen flex flex-col items-center justify-center"
      >
        <div className="md:w-[50vw] h-screen bg-green-400 pt-30 text-black border-b-2 border-black">
          <img
            className="w-40 h-40 border-white rounded-full"
            src="https://i.pinimg.com/736x/00/fe/19/00fe191b0c4dde7d29d81c67bee0f0cb.jpg"
            alt=""
          />
          <h1
            className="text-3xl"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Stands For Vikas Jha
          </h1>
        </div>
        <div className="md:w-[50vw] h-screen bg-green-400 text-black border-b-2 border-black">
          hey
        </div>
        <div className="md:w-[50vw] h-screen bg-green-400 text-black border-b-2 border-black">
          yup
        </div>
      </div>
    </div>
  );
}

export default Home;
