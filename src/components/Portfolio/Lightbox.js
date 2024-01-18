import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

function Lightbox() {
    return (
        <>
        <SimpleReactLightbox>
            <SRLWrapper>
            <div className="row  gx-5">
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog1.jpg">
                            <img  className="img-fluid" alt="Comfort Office tools" src="img/preview/blog1.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Office tools</span>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog20.jpg">
                            <img  className="img-fluid" alt="Buy now Watch & Laptop" src="img/preview/blog20.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Watch & Laptop</span>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog18.jpg">
                            <img  className="img-fluid" alt="Mosaic Design Web Design Studio" src="img/preview/blog18.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Mosaic Design</span>
                    </div>
                </div> 
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog3.jpg">
                            <img  className="img-fluid" alt="Think and Point your work" src="img/preview/blog3.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Point your work</span>
                    </div>
                </div> 
            </div>
            </SRLWrapper>
        </SimpleReactLightbox> 
        </>
    )
}

export default Lightbox
