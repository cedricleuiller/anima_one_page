import React from 'react';
import Header1 from './../components/Header/Header1';
import Welcome1 from './../components/Welcome/Welcome1';
import About1 from './../components/About/About1';
import Service1 from './../components/Service/Service1';
import Portfolio1 from './../components/Portfolio/Portfolio1';
import Contact1 from './../components/Contact/Contact1';
import Newsletter1 from './../components/Newsletter/Newsletter1';
import Map from './../components/Map';
import Footer1 from './../components/Footer/Footer1';
import SimpleSlider1 from './../components/Sliders/Slick-slider1'
function Home1() {
  return (
    <>
      
      <div  id="home" className="full-screen-block">
      <Header1/>
      <SimpleSlider1/>
      </div>
      <Welcome1/>
      <About1/>
      <Service1/>
      <Portfolio1/>
      <Contact1/>
      <Newsletter1/>
      <Map/>
      <Footer1/>
    </>
  );
}

export default Home1;