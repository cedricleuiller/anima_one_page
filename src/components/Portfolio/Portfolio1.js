import React from 'react'
import Lightbox from './Lightbox'


function Portfolio1() {
    return (
        <>
        <section  id="portfolio" className="bg-non-fixed">
            <div className="bg-inner-dark2"></div>
            <div className="bg-50-r"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className="pad-l-45 pad-r-45">
                            <div className="section-block-title">
                                <div className="section-title">   
                                    <article className="section-title-body mobile-mb-0">
                                        <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Portfolio</h1>
                                        <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                        <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </article>
                                </div>
                            </div>  
                        </div> 
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="pad-l-45 pad-r-45 block">
                                <Lightbox/>                               
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Portfolio1
