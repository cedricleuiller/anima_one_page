import React from 'react'
import NewsletterForm from './NewsletterForm'
function Newsletter1() {
    return (
        <>
           <section>
            <div className="color-scheme-2">
                <div className="bg-50-r not-after"></div>
                <div className="bg_object1 left lax lax_preset_fadeIn:50:100 lax_preset_spin:2500:170  lax_preset_slideY:10000:2200"></div>
                <div className="container-fluid">
                    <div className="row  justify-content-center">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="pad-l-45 pad-r-45">
                                <div className="section-block-title">
                                    <div className="section-title">   
                                        <article className="section-title-body">
                                            <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Newsletter</h1>
                                            <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                            
                                            <NewsletterForm/>                                       
                                        </article>
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

export default Newsletter1
