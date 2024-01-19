import React from 'react';
import Header2 from './../components/Header/Header2';
import Welcome2 from './../components/Welcome/Welcome2';
import About2 from './../components/About/About2';
import Service2 from './../components/Service/Service2';
import Portfolio2 from './../components/Portfolio/Portfolio2';
import Blogs2 from './../components/Blogs/Blogs2';
import Clients from './../components/Clients';
import Contact2 from './../components/Contact/Contact2';
import Newsletter2 from './../components/Newsletter/Newsletter2';
import Footer2 from './../components/Footer/Footer2';
import SimpleSlider2 from './../components/Sliders/Slick-slider2'
import bg_vide from './../videos/bigway.mp4'
function Home2() {
  return (
    <>
      <div  id="home" className="full-screen-block">
        <video autoPlay loop muted className="bg_video">
                <source src={bg_vide} type="video/mp4"></source>
        </video>
        <div className="bg-inner-dark"></div>
        <Header2/>
        <SimpleSlider2/>
      </div>
      <Welcome2/>
      <About2/>
      <Service2/>
      <Newsletter2/>
      <Portfolio2/>
      <Blogs2/>
      <Clients/>
      <Contact2/>
      <Footer2/>
    </>
  );
}

export default Home2;