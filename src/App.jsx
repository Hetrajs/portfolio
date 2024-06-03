import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import FeaturedWorks from "./components/FeaturedWorks";
import About from "./components/About";
import Marquee from "./components/Marquee";
import MyExpertise from "./components/MyExpertise";
import Motivation from "./components/Motivation";
import Experience from "./components/Experience";
import FavouriteStack from "./components/FavouriteStack";
import AskQuestions from "./components/AskQuestions";
import LetsWorkTogether from "./components/LetsWorkTogether";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Works from "./components/partials/Works";

const App = () => {
  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div id="main-container" className="w-full min-h-screen">
              <Navbar />
              <LandingPage />
              <FeaturedWorks />
              <About />
              {/* <Marquee/> */}
              <MyExpertise />
              <Motivation />
              <Experience />
              <FavouriteStack />
              <AskQuestions />
              <LetsWorkTogether />
              <Footer />
            </div>
          </>
        }
      />
      <Route path="/works/:name" element={<Works />} />
    </Routes>
  );
};

export default App;
