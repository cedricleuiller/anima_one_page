import React from 'react'
function About1() {
    
    return (
        <>
            <section id="about" className="light">
            <div className="bg-light"></div>
            <div className="block">
                <div className="container">
                    <div className="row align-items-center  gx-5">
                        <div className="col-lg-6">
                            <div className="section-sub-title">
                                <article className="section-title-body">
                                    <h1 className="head-title"><span>About</span> Anema Template </h1>
                                    <p className="head-text">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <ul className="list-unstyled list-bold d-lg-none d-xl-block">
                                        <li><i className="ion-checkmark"></i> Creative and Modern React One Page Template</li>
                                        <li><i className="ion-checkmark"></i> Advanced customization template ui/ux options</li>
                                        <li><i className="ion-checkmark"></i> Portfolio is coming from objects and arrays </li>
                                    </ul>
                                </article>
                            </div>                      
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img-block">
                                <img alt="" className="img-fluid" src="img/preview/about1.jpg"/>
                                <div className="about-img lax   lax_preset_slideY:3500:-400">
                                    <img alt="" className="img-fluid" src="img/preview/about2.jpg"/>
                                </div>
                                <div className="about-img-info widget-block dark mb-0">
                                    <h4 className="widget-title dark">My Resume (CV) </h4>
                                    <p> Download a resume and land my jobs</p>
                                    <a href="www.google.com" className="btn-default btn-move active mb-0">Download</a>
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
