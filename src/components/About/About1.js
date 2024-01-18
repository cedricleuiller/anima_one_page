import React from 'react'
import bg_vide from '../../videos/bigway.mp4'
function About1() {
    
    return (
        <>
            <section id="about" className="bg-non-fixed">
            <video autoPlay loop muted className="bg_video">
                <source src={bg_vide} type="video/mp4"></source>
            </video>
            <div className="bg-inner-dark"></div>
            <div className="bg-50-r"></div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className="pad-l-45 pad-r-45">
                            <div className="section-block-title">
                                <div className="section-title">   
                                    <article className="section-title-body mobile-mb-0">
                                        <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">About</h1>
                                        <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                        <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                            Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </article>
                                </div>
                            </div> 

                        </div> 
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="pad-l-45 pad-r-45 block">

                            <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                <h4 className="widget-title">The best one page template</h4>
                                <p>
                                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                            
                            <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                            <div className="clearfix"></div>
                                
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "70%"}} >

                                    </div>
                                    <span className="skill-value">Graphic Design <span> 70%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar"  style={{width: "95%"}}>

                                    </div>
                                    <span className="skill-value">Web Design <span> 95%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar"  style={{width: "90%"}}>

                                    </div>
                                    <span className="skill-value">Web Developing <span> 90%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar"  style={{width: "85%"}}>

                                    </div>
                                    <span className="skill-value">Java Scripting <span> 85%</span></span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About1
