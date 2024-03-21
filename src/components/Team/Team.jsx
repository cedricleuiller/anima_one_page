import React from 'react'
import { partners } from '../../data/partners/dataPartners'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'

function Team() {

    return (
        <>
        <section>
            <div className="block color-scheme-2">
                <div className="container">
                    <div className="section-sub-title center">
                        <article className="section-title-body white">
                            <h1 className="head-title">Mon équipe / Partenaires</h1>
                        </article>
                    </div>
                    <div className="row justify-content-center justify-content-around">
                        {
                            partners.map((partner) => (
                                <div key={partner.id} className="col-lg-3 col-md-6 col-sm-12">
                                    <article className="author-block" >
                                        <figure className="figure-hover-overlay">
                                            <img className="img-fluid" src={partner.picture} alt="" title="" />
                                            <div className="author-information">
                                                <h4>{partner.name}</h4>
                                                <p className="author-prof">{partner.job}</p>
                                                <p className=''>{partner.phone}</p>
                                                <a href={partner.website}>{partner.website}</a>
                                            </div>
                                        </figure>
                                        <div className="left-icon">
                                            <ul className="author-icon list-unstyled">
                                                <li>
                                                    <a href={partner.instagram} target='_blank' rel="noopener noreferrer"><InstagramIcon fontSize='large' /></a>
                                                    <a href={partner.website} target='_blank' rel="noopener noreferrer"><LanguageIcon fontSize='large' /></a>

                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Team