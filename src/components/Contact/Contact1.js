import React from 'react'
import ContactForm from './../Contact/ContactForm'
function Contact1() {
    return (
        <>
        <section  id="contact" className="bg-non-fixed">
            <div className="bg-inner-dark2"></div>
            <div className="bg-50-l"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12  order-md-1 justify-content-center d-flex align-items-center">
                        <div className="pad-l-45 pad-r-45">
                            <div className="section-block-title">
                                <div className="section-title">   
                                    <article className="section-title-body mobile-mb-0">
                                        <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Contact</h1>
                                        <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                        <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                            Nous vous attendons avec impatience. Contactez-nous par mail ou téléphone.
                                        </p>
                                        <div className="h25"></div>
                                    </article>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="pad-l-45 pad-r-45 block">


                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="widget-block mobile-center">
                                        <h4 className="widget-title"><i className="ion-android-pin"></i>Localiser sur :</h4>
                                        <p>Seine-Saint-Denis<br/> 93140 Bondy</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="widget-block mobile-center">
                                        <h4 className="widget-title"><i className="ion-android-call"></i>Téléphone :</h4>
                                        <p>+33 6 59 75 29 02</p> 
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

export default Contact1
