import React from 'react'
import bgAbout from '../../videos/bgAbout.mp4'
function About() {

    return (
        <>
            <section id="about" className="bg-non-fixed">
                <video autoPlay loop muted className="bg_video">
                    <source src={bgAbout} type="video/mp4"></source>
                </video>
                <div className="bg-inner-dark"></div>
                <div className="bg-50-r"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex align-items-center">
                            <div className="pad-l-45 pad-r-45">
                                <div className="section-block-title">
                                    <div className="section-title">
                                        <article className="section-title-body mobile-mb-0">
                                            <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">A propos</h1>
                                            <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                            <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                                En tant que DJ généraliste, mon objectif est simple : créer une ambiance unique qui transcende les générations et les goûts musicaux. Je suis spécialisé dans l'adaptation de playlists, m'assurant que chaque morceau résonne avec la personnalité de votre événement. Que ce soit pour une soirée privée, un mariage, une soirée d'entreprise ou tout autre événement spécial, je m'efforce de faire vibrer la piste de danse et de marquer les esprits.
                                        </p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="pad-l-45 pad-r-45 block">

                                <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                    <h4 className="widget-title">Engagement envers la satisfaction du client</h4>
                                    <p>
                                        En tant que DJ généraliste, mon objectif premier est de créer une ambiance unique qui transcende les générations et les goûts musicaux. Mon approche sérieuse et professionnelle se reflète dans chaque aspect de mes services. Avant chaque événement, je m'engage dans un échange sérieux et impliqué avec mes clients pour comprendre leurs besoins et leurs attentes spécifiques.
                                </p>
                                </div>
                                <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                    <h4 className="widget-title">Personnalisation de la Playlist</h4>
                                    <p>
                                        Je suis spécialisé dans l'adaptation de playlists, veillant à ce que chaque morceau résonne avec la personnalité de votre événement. Pour les mariages et anniversaires, je travaille en étroite collaboration avec vous pour élaborer une trame musicale qui reflète l'essence de votre célébration.
                                </p>
                                </div>
                                <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                    <h4 className="widget-title">Organisation minutieuse pour une ambiance parfaite</h4>
                                    <p>
                                        L'organisation est la clé d'une ambiance parfaite. Je m'implique dans la planification minutieuse de la soirée, en discutant des moments-clés et des transitions musicales pour garantir une expérience fluide et inoubliable.
                                </p>
                                </div>
                                <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                    <h4 className="widget-title">Investissement professionnel et créations d'instants mémorables</h4>
                                    <p>
                                        En tant que professionnel engagé, je m'investis pleinement dans chaque événement. Mon équipement de pointe, combiné à une connaissance approfondie des dernières tendances musicales, garantit une prestation de qualité. Mon investissement va au-delà de la musique, car je suis déterminé à satisfaire pleinement mes clients.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About