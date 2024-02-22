import React from 'react'
import bgServices from '../../videos/bgServices.mp4'
const services = [
    {
        _id:'001',
        classIcon:'ion-ios-pie-outline',
        title:'Bronze',
        tarif: 950,
        text:
            "Jusqu'à 60 personnes \n Playlist sur mesure \n 2 enceintes \n Régie DJ \n Lumières piste de dance \nMachine à brouillard",
    },
    {
        _id:'002',
        classIcon:'ion-ios-printer-outline',
        title:'Silver',
        tarif: 1200,
        text:"Jusqu'à 100 personnes \n Coordination avec les prestataires (traiteur, artistes etc) \n Playlist sur mesure \n Musique durant le repas \n 2 enceintes + caisson de basse \n 1 micro sans fil \n Régie DJ \n Lumières pistes de dance \n Éclairage au sol \n Machine à brouillard",
    },
    {
        _id:'003',
        classIcon:'ion-ios-reverse-camera-outline',
        title:'Gold',
        tarif: 1650,
        text:"150 personnes et plus \n Suivi de projet bimensuelle \n Coordination avec les prestataires \n Playlist sur mesure \n Musique durant le repas \n Enceintes + caisson de basse \n Sonorisation cocktails extérieurs \n 2 micros sans fils \n Régie DJ \n Projecteur et écran disponible \n Lumières pistes de dance \n Éclairage de façades \n Éclairage au sol \n Machine à brouillard",
    },
    // {
    //     _id:'004',
    //     classIcon:'ion-ios-telephone-outline',
    //     title:'Call Support',
    //     text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    // },
    // {
    //     _id:'005',
    //     classIcon:'ion-ios-flask-outline',
    //     title:'Creative Design',
    //     text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    // },
    // {
    //     _id:'006',
    //     classIcon:'ion-ios-settings',
    //     title:'Powerful & Flexible',
    //     text:'Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.'
    // }
]
function Service1() {
    return (
        <>
        <section  id="services"  className="bg-non-fixed">
            <video autoPlay loop muted className="bg_video">
                <source src={bgServices} type="video/mp4"></source>
            </video>
            <div className="bg-inner-dark2"></div>
            <div className="bg-65-l"></div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12 order-md-1 justify-content-center d-flex align-items-center">
                        <div className="pad-l-45 pad-r-45">
                            <div className="section-block-title">
                                <div className="section-title">   
                                    <article className="section-title-body mobile-mb-0">
                                        <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Services</h1>
                                        <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                        <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                            Voici les différentes formules de prestations (mariages, anniversaires ou autres événements).
                                        </p>
                                        <div className="h25"></div>
                                        <div className="fucts-block wow fadeInUp animated" data-wow-duration="1.5s">
                                            <div className="fuct">
                                                <h2>+ de 500</h2>
                                                <h4>prestations effectuées</h4>
                                            </div>
                                            <div className="fuct">
                                                <h2>+ de 10 000</h2>
                                                <h4>Morceaux généralistes</h4>
                                            </div>
                                            <div className="fuct">
                                                <h2>18 ans</h2>
                                                <h4>d'expériences</h4>
                                            </div>
                                        </div>
                                    </article>
                                </div>  
                            </div>     
                        </div>

                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="pad-l-45 pad-r-45 block">
                            <div className="col d-flex flex-wrap">
                                {services.map((service)=>(
                                    <div className="col-md-4 col-sm-6 col-xs-12" key={service._id}>
                                    <div className="block-feature">
                                        <i className={service.classIcon}></i>
                                        <a href="/">{service.title}</a>
                                        <p>
                                            A partir de <span>{service.tarif} €</span>
                                        </p>
                                        <br/>
                                        <div className='detailsListFormules'>
                                            <ul>
                                            {service.text.split('\n').map((line, key)=>
                                                <li key={key}>
                                                    <span>{line}</span>
                                                </li>
                                            )}
                                            </ul>
                                        </div>
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