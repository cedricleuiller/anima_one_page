import React from 'react';
import Header4 from './../components/Header/Header4';
import Welcome4 from './../components/Welcome/Welcome4';
import About4 from './../components/About/About4';
import Service4 from './../components/Service/Service4';
import Portfolio4 from './../components/Portfolio/Portfolio4';
import Contact4 from './../components/Contact/Contact4';
import Map from './../components/Map';
import Footer4 from './../components/Footer/Footer4';
import SimpleSlider4 from './../components/Sliders/Slick-slider4'
function Home4() {
  return (
    <>
      <div  id="home" className="full-screen-block sliderLight">
        <Header4/>
        <SimpleSlider4/>
      </div>
      <Welcome4/>
      <About4/>
      <Service4/>
      <Portfolio4/>
      <Contact4/>
      <Map/>
      <Footer4/>
    </>
  );
}

export default Home4;