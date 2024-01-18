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
function Service2() {
    return (
        <>
        <section  id="services" className="single-bg">
                
                <div className="section-block-title">
                    <div className="bg-dark"></div>
                    <div className="container">
                        <div className="section-sub-title center">
                            <article className="section-title-body white">
                                <h1 className="head-title">Interesting <span>Services</span> </h1>
                            </article>
                        </div>    
                    </div>
                    <div className="container">
                        <div className="row">
                            {services.map((service)=>(
                            <div className="col-xxl-4 col-md-6"  key={service._id}>
                                <div className="block-feature-icon left">
                                    <div className="icon hi-icon-color hi-icon-effect">
                                        <span className="hi-icon"><i className={service.classIcon}></i></span>
                                    </div>
                                    <div className="block-title">
                                        <h4>{service.title}</h4> 
                                        <p>{service.text}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="h50"></div>
                </div>
        </section>
        </>
    )
}

export default Service2
