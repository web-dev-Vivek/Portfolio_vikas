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
        <div className="md:w-[50vw] h-screen bg-green-400 text-black border-b-2 border-black">
          hi
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
