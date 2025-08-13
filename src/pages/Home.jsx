import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="h-screen flex justify-center items-center flex-col text-center bg-gray-500"
      >
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">
          This is the landing content. Scroll smoothly with Lenis.
        </p>
      </div>
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="h-screen flex justify-center items-center flex-col text-center bg-gray-500"
      >
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">
          This is the landing content. Scroll smoothly with Lenis.
        </p>
      </div>
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="h-screen flex justify-center items-center flex-col text-center bg-gray-500"
      >
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">
          This is the landing content. Scroll smoothly with Lenis.
        </p>
      </div>
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="h-screen flex justify-center items-center flex-col text-center bg-gray-500"
      >
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">
          This is the landing content. Scroll smoothly with Lenis.
        </p>
      </div>
    </>
  );
}

export default Home;
