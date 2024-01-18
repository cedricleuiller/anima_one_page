import React from 'react';
import Header3 from './../components/Header/Header3';
import SimpleSlider3 from './../components/Sliders/Slick-slider3'
import Welcome3 from './../components/Welcome/Welcome3';
import About3 from './../components/About/About3';
import Service3 from './../components/Service/Service3';
import Featured from './../components/Featured/Featured';
import Portfolio3 from './../components/Portfolio/Portfolio3';
import Team from './../components/Team';
import Contact3 from './../components/Contact/Contact3';
import Newsletter2 from './../components/Newsletter/Newsletter2';
import Map from './../components/Map';
import Footer3 from './../components/Footer/Footer3';

function Home3() {
  return (
    <>
      <div  id="home" className="full-screen-block carousel-with-dots dotted-left">
        <Header3/>
        <SimpleSlider3/>
      </div>
      <Welcome3/>
      <About3/>
      <Newsletter2/>
      <Service3/>
      <Featured/>
      <Portfolio3/>
      <Team/>
      <Contact3/>
      <Map/>
      <Footer3/>
    </>
  );
}

export default Home3;