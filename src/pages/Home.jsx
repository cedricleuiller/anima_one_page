import React from 'react'
import Header from './../components/Header/Header'
import Welcome from './../components/Welcome/Welcome'
import About from './../components/About/About'
import Service from './../components/Service/Service'
import Portfolio from './../components/Portfolio/Portfolio'
import Contact from './../components/Contact/Contact'
import Footer from './../components/Footer/Footer'
import SimpleSlider from './../components/Sliders/Slick-slider'
function Home() {
  return (
    <>  
      <div  id="home" className="full-screen-block">
      <Header/>
      <SimpleSlider/>
      </div>
      <Welcome/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home