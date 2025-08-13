import React, { useEffect } from "react";
import "./index.css"; // tumhara CSS file
import HOME from "./pages/Home"; // tumhara Home component

export default function App() {
  useEffect(() => {
    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        smooth: true,
        direction: "vertical",
        gestureDirection: "vertical",
        smoothTouch: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    } else {
      console.warn("Lenis library not loaded. Check your CDN script.");
    }
  }, []);

  return (
    <>
      <HOME />
    </>
  );
}
