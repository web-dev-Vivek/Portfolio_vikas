import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Img from "../assets/react.png";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="w-screen flex flex-col items-center justify-center"
      >
        <div className="md:w-[50vw] h-screen  pt-30 text-white border-b-2 border-black">
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

          <div>
            <button></button>
          </div>
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
