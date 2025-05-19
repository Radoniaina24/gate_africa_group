"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "../Hero/Hero";
export default function Header() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full "
            src="https://www.youtube.com/embed/5G09oc8vquM?autoplay=1&loop=1&playlist=5G09oc8vquM&mute=1&controls=0&showinfo=0&start=6"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col justify-center items-center h-screen text-center px-4">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
