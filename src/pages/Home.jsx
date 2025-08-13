import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-40">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">
          This is the landing content. Scroll smoothly with Lenis.
        </p>
      </div>
    </>
  );
}

export default Home;
