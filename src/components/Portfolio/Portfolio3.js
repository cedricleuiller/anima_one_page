import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
const portfolioAll = [
    {
        _id:'001',
        src:'img/preview/blog1.jpg',
        title:'Anema Web Tools',
        category:'Graphic Design'
    },
    {
        _id:'002',
        src:'img/preview/blog6.jpg',
        title:'Smartphone Market',
        category:'3d Design'
    },
    {
        _id:'003',
        src:'img/preview/blog2.jpg',
        title:'World is Bicycle wheel',
        category:'Marketing'
    },
    {
        _id:'004',
        src:'img/preview/blog3.jpg',
        title:'Smart Book System',
        category:'Web Design'
    },
    {
        _id:'005',
        src:'img/preview/blog4.jpg',
        title:'Night Day Beauty',
        category:'Graphic Design'
    },
    {
        _id:'006',
        src:'img/preview/blog5.jpg',
        title:'Object things',
        category:'3d Design'
    }
]

function Portfolio3() {
    return (
        <>
        <section  id="portfolio">
        <div className="bg-dark"></div>
            <div className="section-block-title">
                <div className="section-title">   
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-10">
                                <article className="section-title-body">
                                    <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Portfolio</h1>
                                    <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                    <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                        Find you have need item
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="block color-scheme-blur">
                    <div className="container">
                        
                            <SimpleReactLightbox>
                                <SRLWrapper>
                                <div className="row">
                                    {portfolioAll.map((portfolio)=>(
                                        <div className="col-lg-4 col-md-6"  key={portfolio._id}>
                                            <div className="portfolio-block">
                                                <a href={portfolio.src}>
                                                    <img alt={portfolio.title} className="img-fluid" src={portfolio.src}/>
                                                </a>
                                                <div className="portfolio-content">
                                                    <p>{portfolio.category}</p>
                                                    <h4>{portfolio.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                </SRLWrapper>
                            </SimpleReactLightbox> 
                        
                    </div> 
                    <div className="clearfix"></div>
                </div>
            
            
        </section>
   
        </>
    )
}

export default Portfolio3
