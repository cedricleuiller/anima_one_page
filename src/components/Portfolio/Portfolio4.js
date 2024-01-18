import React from 'react'
import PortfolioBlockModal from './PortfolioBlockModal'
const portfolioAll = [
    {
        _id:'001',
        src:'img/preview/blog30.jpg',
        title:'Wall decoration',
        category:'Interior Design',
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro'
    },
    {
        _id:'002',
        src:'img/preview/blog31.jpg',
        title:'Anema 3d Objects',
        category:'3d Design',
        info:'Rem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro'
    },
    {
        _id:'003',
        src:'img/preview/blog32.jpg',
        title:'Time is money',
        category:'Graphic Design',
        info:'Sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro'
    },
    {
        _id:'004',
        src:'img/preview/blog33.jpg',
        title:'Coffee cup',
        category:'Photo Design',
        info:'Ypsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro'
    },
    {
        _id:'005',
        src:'img/preview/blog34.jpg',
        title:'Office Tools',
        category:'Graphic Design',
        info:'Dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro'
    },
    {
        _id:'006',
        src:'img/preview/blog35.jpg',
        title:'Breakfast Ready',
        category:'3d Design',
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro'
    }
]

function Portfolio3() {
    return (
        <>
        <section  id="portfolio" className="light">
                <div className="bg-light"></div>
                <div className="block">
                    <div className="container">
                    <div className="section-sub-title center">
                                <article className="section-title-body">
                                <h1 className="head-title">Our last <span>Projects</span> and works</h1>
                                        <p className="head-text">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                </article>
                            </div>
                        <div className="row">
                                {portfolioAll.map((portfolio)=>(
                                    <PortfolioBlockModal
                                    key={portfolio._id.toString()} value={portfolio._id}
                                    portfolioTitle={portfolio.title} 
                                    portfolioInfo={portfolio.info} 
                                    portfolioSrc={portfolio.src} 
                                    portfolioCat={portfolio.category}/>
                                ))}
                        </div>   
                    </div> 
                    <div className="clearfix"></div>
                </div>
        </section>
   
        </>
    )
}

export default Portfolio3
