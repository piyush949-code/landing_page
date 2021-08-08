import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import Syllabous from "./components/Syllabous";
import { Project } from "./components/Project";
import { Testimonials } from "./components/testimonials";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Instructor } from "./components/Instructor";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Anotherapp = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Syllabous data={landingPageData.Syllabous} />
      <Instructor data={landingPageData.Instructor} />
     
      
      <Project />
      <Testimonials data={landingPageData.Testimonials} />
      
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Anotherapp;
