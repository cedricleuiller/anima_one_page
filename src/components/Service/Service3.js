import React from 'react'
const services = [
    {
        _id:'001',
        classIcon:'ion-ios-pie-outline',
        title:'Accountment',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam, quis nostrud'
    },
    {
        _id:'002',
        classIcon:'ion-ios-printer-outline',
        title:'Printing',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam, quis nostrud'
    },
    {
        _id:'003',
        classIcon:'ion-ios-reverse-camera-outline',
        title:'Photographic',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam, quis nostrud'
    },
    {
        _id:'004',
        classIcon:'ion-ios-telephone-outline',
        title:'Call Support',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam, quis nostrud'
    },
    {
        _id:'005',
        classIcon:'ion-ios-flask-outline',
        title:'Creative Design',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam, quis nostrud'
    },
    {
        _id:'006',
        classIcon:'ion-ios-settings',
        title:'Powerful & Flexible',
        text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam, quis nostrud'
    }
]
function Service3() {
    return (
        <>
        <section  id="services">
        <div className="bg-dark"></div> 
            <div className="section-block-title">
                <div className="section-title">   
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-10">
                                <article className="section-title-body">
                                    <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Services</h1>
                                    <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                    <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                        The best services whole of the world 
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
                <div className="block color-scheme-blur">
                    <div className="container">
                        <div className="row">
                            {services.map((service)=>(
                            <div className="col-lg-4 col-md-6"  key={service._id}>
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
            
        </section>
        </>
    )
}

export default Service3
