/** @format */

// import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/NavBar";
import HelloSection from "./Components/HelloSection";
import Timeline from "./Components/Timeline";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
// import Story from "./Components/Story";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div>
        <Navbar /> {/* Navbar will be at the top */}
        <HeroSection />
        <HelloSection />
        <AboutSection />
        {/* <Story /> */}
        <Timeline />
        <Gallery />
        <Footer />
        {/* Add other sections like Gallery, RSVP as required */}
      </div>
    </>
  );
}

export default App;
