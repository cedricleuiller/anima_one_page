import React from 'react'
import ContactForm from './../Contact/ContactForm'

function Contact3() {
    return (
        <>
        <section  id="contact">
        <div className="bg-dark"></div>
            <div className="section-block-title">
                <div className="section-title">   
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-10">
                                <article className="section-title-body">
                                    <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Contact</h1>
                                    <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                    <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                        Get in touch via contact form or email
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            
                <div className="block  color-scheme-blur">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10 col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="text-center white">
                                                <h4 className="widget-title"><i className="ion-android-call"></i>Phone:</h4>
                                                <p>(10 808) 321-1785-952<br/>
                                                    (10 808) 321-1785-953
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center white">
                                                <h4 className="widget-title"><i className="ion-home"></i>Address:</h4>
                                                <p> MosaicDesign Studio<br/>
                                                Avanue street 255, NA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center white">
                                                <h4 className="widget-title"><i className="ion-email"></i>Email:</h4>
                                                <p> mosaic-design@domain.com<br/>
                                                    support@yoursite.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <ContactForm/>
                                </div>                                   
                        </div>
                    </div>
                </div>
            
        </section>
        </>
    )
}

export default Contact3
