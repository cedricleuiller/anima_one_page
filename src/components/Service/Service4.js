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
function Service4() {
    return (
        <>
        <section  id="services" className="light">
            <div className="bg-light"></div>
                

                <div className="block">
                    <div className="container">
                            <div className="section-sub-title center">
                                <article className="section-title-body">
                                <h1 className="head-title">All best <span>Services</span> from Mosaic Design</h1>
                                        <p className="head-text">
                                            Woident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                </article>
                            </div>
                        <div className="row">
                            {services.map((service)=>(
                            <div className="col-lg-4 col-md-6"  key={service._id}>
                                <div className="block-feature-icon  center dark">
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
                </div>
        </section>
        </>
    )
}

export default Service4
