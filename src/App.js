import React from "react";
import "./App.css";

import Header from "./components/Header";
import TopSlider from "./components/Top_Slider";
import MenuTree from "./components/MenuBar";
import AboutUs from "./components/Features";
import Testimonials from "./components/Testimonials";
import GallerySlider from "./components/Gallery_Slider";
import Footer from "./components/Footer";
import ContuctBox from "./components/ContuctBox";

import {
  testimonialsData,
  aboutUsData,
  gallerySliderStaticData,
  menuStaticData,
  topSliderStaticData,
  infoList,
  contuctUsData,
} from "./staticData";

function App() {
  return (
    <div className="root">
      <Header />
      <TopSlider images={topSliderStaticData} />
      <MenuTree data={menuStaticData} position={0} />
      <ContuctBox />
      <AboutUs data={aboutUsData} />
      <Testimonials testimonials={testimonialsData} />
      <GallerySlider images={gallerySliderStaticData} />
      <Footer infoList={infoList} contuctUsData={contuctUsData} />
    </div>
  );
}

export default App;
