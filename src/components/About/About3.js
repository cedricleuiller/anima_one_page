import React from 'react'
function About3() {
    
    return (
        <>
            <section  id="about">
            <div className="bg-dark"></div>    
            <div className="section-block-title">
                <div className="section-title">   
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-10">
                                <article className="section-title-body">
                                    <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">About</h1>
                                    <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                    <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                        We are regarded in stunning website solutions
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="color-scheme-blur">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-6 col-sm-12">
                            <div className="relative">
                                <div className="h100  d-md-none"></div>
                                <div className="img-rotate wow fadeInLeftBig animated" data-wow-duration="1.5s">
                                    <img className="img-fluid" src="img/preview/desktop.png" alt=""/>
                                </div>
                                <img className="img-fluid img-y-trans wow fadeInLeftBig animated" data-wow-duration="1.5s" data-wow-delay="1s" src="img/preview/ipad-mini-rot.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="block pad-l-30">
                            <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                <h4 className="widget-title">The best one page template</h4>
                                <p>
                                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                            <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                            <div className="clearfix"></div>
                                <div className="progress d-md-none d-lg-block">
                                    <div className="progress-bar" style={{width: "70%"}} >
                                    </div>
                                    <span className="skill-value">Graphic Design <span> 70%</span></span>
                                </div>
                                <div className="progress d-md-none d-lg-block">
                                    <div className="progress-bar"  style={{width: "95%"}}>
                                    </div>
                                    <span className="skill-value">Web Design <span> 95%</span></span>
                                </div>
                                <div className="progress d-md-none d-xl-block">
                                    <div className="progress-bar"  style={{width: "90%"}}>
                                    </div>
                                    <span className="skill-value">Web Developing <span> 90%</span></span>
                                </div>
                                <div className="progress d-md-none d-xxl-block">
                                    <div className="progress-bar"  style={{width: "85%"}}>
                                    </div>
                                    <span className="skill-value">Java Scripting <span> 85%</span></span>
                                </div>
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

export default About3
