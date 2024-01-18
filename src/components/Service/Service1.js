import React from 'react'
const services = [
    {
        _id:'001',
        classIcon:'ion-ios-pie-outline',
        title:'Accountment',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    },
    {
        _id:'002',
        classIcon:'ion-ios-printer-outline',
        title:'Printing',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    },
    {
        _id:'003',
        classIcon:'ion-ios-reverse-camera-outline',
        title:'Photographic',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    },
    {
        _id:'004',
        classIcon:'ion-ios-telephone-outline',
        title:'Call Support',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    },
    {
        _id:'005',
        classIcon:'ion-ios-flask-outline',
        title:'Creative Design',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    },
    {
        _id:'006',
        classIcon:'ion-ios-settings',
        title:'Powerful & Flexible',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    }
]
function Service1() {
    return (
        <>
          <section  id="services"  className="bg-non-fixed">
            <div className="bg-inner-dark2"></div>
            <div className="bg-50-l"></div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 order-md-1 justify-content-center d-flex align-items-center">
                        <div className="pad-l-45 pad-r-45">
                            <div className="section-block-title">
                                <div className="section-title">   
                                    <article className="section-title-body mobile-mb-0">
                                        <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Services</h1>
                                        <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                        <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                            Sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <div className="h25"></div>
                                        <div className="fucts-block wow fadeInUp animated" data-wow-duration="1.5s">
                                            <div className="fuct">
                                                <h2>2 570</h2>
                                                <h4>Fun clients</h4>
                                            </div>
                                            <div className="fuct">
                                                <h2>4 881</h2>
                                                <h4>Followers</h4>
                                            </div>
                                            <div className="fuct">
                                                <h2>1 540</h2>
                                                <h4>Best Reviews</h4>
                                            </div>
                                        </div>
                                    </article>
                                </div>  
                            </div>     
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="pad-l-45 pad-r-45 block">
                            <div className="row">
                                {services.map((service)=>(
                                    <div className="col-lg-12 col-xxl-6" key={service._id}>
                                    <div className="block-feature">
                                        <i className={service.classIcon}></i>
                                        <a href="/">{service.title}</a>
                                        <p>
                                        {service.text}
                                        </p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>  
        </>
    )
}

export default Service1
