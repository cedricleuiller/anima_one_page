import React from 'react'
import NewsletterForm from './NewsletterForm'
function Newsletter1() {
    return (
        <>
           <section>
            <div className="color-scheme-1  block">
                <div className="container">
                    <div className="section-sub-title center">
                        <article className="section-title-body white">
                            <h1 className="head-title">Get our latest news</h1>
                        </article>
                    </div>
                    <div className="row   justify-content-center">
                        <div className="col-md-8 col-md-offset-2">                                
                            <NewsletterForm/> 
                            <div className="h25"></div>                           
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
    )
}

export default Newsletter1
