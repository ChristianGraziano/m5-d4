import LatestRelease from "../Component/LatestRelease";
import React from "react";
import NavBar from "../Component/NavBar";
import WelcomeHero from "../Component/WelcomeCarosel/WelcomeHero";
import MyFooter from "../Component/footer/MyFooter";
import SpinnerLoading from "../Component/SpinnerLoading";

// APP

function Homepage({ arrayBook }) {
  return (
    <>
      <NavBar />
      <WelcomeHero />
      <LatestRelease arrayBook={arrayBook} />
      <MyFooter />
    </>
  );
}

export default Homepage;
