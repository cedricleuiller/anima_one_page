import React from 'react'
import SliderThreeItem from './../Sliders/Slick-three-item'
// import Featured from '../Featured/Featured'
import Team from '../Team';

function Portfolio2() {
    return (
        <>
        <section  id="portfolio" className="single-bg">
            <div className="section-block-title">
                <div className="bg-dark"></div>
                <div className="container">
                    <div className="section-sub-title center">
                        <article className="section-title-body white">
                            <h1 className="head-title">Best <span>Works</span> from us</h1>
                        </article>
                    </div>    
                </div> 
                <div className="container">
                    <div className="carousel-with-dots gap-30">
                        <SliderThreeItem/>
                    </div> 
                    <div className="clearfix h50"></div>
                </div>
            </div>
            {/* <Featured/> */}
            <Team />
        </section>
   
        </>
    )
}

export default Portfolio2
