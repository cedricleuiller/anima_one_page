import React from 'react'
import {Link} from 'react-scroll'
function About2() {
    
    return (
        <>
            <section  id="about" className="single-bg ab2">
            <div className="section-block-title">
            <div className="bg-dark"></div>
                <div className="container">
                        <div className="section-sub-title center">
                            <article className="section-title-body white">
                                <h1 className="head-title">A Little <span>About</span> us</h1>
                            </article>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-2 d-flex align-items-center">
                                <div className="widget-block relative">
                                <div className="h100 d-none d-lg-block"></div>
                                <h4 className="widget-title">The best one page template</h4>
                                <p>
                                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                                    <div className="block-feature d-lg-none d-xl-block">
                                        <i className="ion-calendar"></i>
                                        <a href="/">Deadline ready</a>
                                        <p>
                                        Duis aute irure dolor quis dolor quis nostrud exercitation ullamco laboris nisi ut in. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="block-feature d-lg-none d-xxl-block">
                                        <i className="ion-image"></i>
                                        <a href="/">Photo Design</a>
                                        <p>
                                        Duis aute irure dolor quis dolor quis nostrud exercitation ullamco laboris nisi ut in. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1 d-flex align-items-end">
                                <div  className="relative  d-flex">
                                        <div className="card-block  lax lax_preset_fadeIn:50:150  lax_preset_slideY:4500:700">
                                            <div className="card-info">
                                                <h2>100%</h2>
                                                <h4>Verified</h4>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src="img/preview/about3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
            <div className="block color-scheme-1">
                <div className="container">
                    <div className="welcome-article-block">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="welcome-article dark y-50">
                                    <img className="img-fluid" alt="" src="img/preview/blog18.jpg"/>
                                    <div className="welcome-article-text">
                                        <h4>Fast Services</h4>
                                        <p>Ut enim ad minim veniam, id anim id deserunt quis nostrud exercitation ullamco</p>
                                        <Link to='services' className="btn-default white btn-move" smooth={false} duration={800}>Visit Services</Link>
                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="welcome-article dark">
                                    <img className="img-fluid" alt="" src="img/preview/blog19.jpg"/>
                                    <div className="welcome-article-text">
                                        <h4>Creative Solution</h4>
                                        <p>Ut enim ad minim veniam, quis anim id deserunt nostrud exercitation ullamco</p>
                                        <Link to='portfolio' className="btn-default white btn-move t1" smooth={false} duration={800}>Visit Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="welcome-article dark y-50">
                                    <img className="img-fluid" alt="" src="img/preview/blog20.jpg"/>
                                    <div className="welcome-article-text">
                                        <h4>Last News</h4>
                                        <p>Ut enim ad minim veniam, quis id anim id  nostrud exercitation ullamco</p>

                                        <Link to='blog' className="btn-default white btn-move t2" smooth={false} duration={800}>Visit Blogs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h50 d-none d-lg-block"></div>
                </div>
            </div>

        </section>
        </>
    )
}

export default About2
